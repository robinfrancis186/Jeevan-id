import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { SignerService } from '../signer/signer.service';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class VerifyService {
  constructor(
    private readonly signerService: SignerService,
    private readonly prisma: PrismaService,
  ) {}

  async verify(jws: string) {
    let payload: {
      personId: string;
      issuingOrg: string;
      expiresAt: string;
      schemaVersion: string;
      nonce: string;
    };
    try {
      payload = await this.signerService.verify(jws);
    } catch (err) {
      throw new BadRequestException('Invalid signature');
    }

    const person = await this.prisma.person.findUnique({ where: { id: payload.personId } });
    if (!person) throw new NotFoundException('Person not found');

    const now = Date.now();
    const exp = new Date(payload.expiresAt).getTime();
    const expired = Number.isFinite(exp) && exp < now;

    const revoked = await this.prisma.revocation.findFirst({
      where: { personId: payload.personId },
      orderBy: { createdAt: 'desc' },
    });

    return {
      payload,
      person: {
        id: person.id,
        alias: person.alias,
        approxAgeBand: person.approxAgeBand,
        issuingOrg: person.issuingOrg,
        expiresAt: person.expiresAt,
      },
      status: {
        expired,
        revoked: Boolean(revoked),
        revocationReason: revoked?.reason,
        revocationAt: revoked?.createdAt,
      },
    };
  }
}

