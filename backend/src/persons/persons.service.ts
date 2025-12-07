import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { SignerService } from '../signer/signer.service';
import { randomUUID } from 'node:crypto';
import { AuditService } from '../audit/audit.service';

const DEFAULT_EXPIRY_DAYS = 30;

@Injectable()
export class PersonsService {
  constructor(
    private prisma: PrismaService,
    private signerService: SignerService,
    private auditService: AuditService,
  ) {}

  async create(dto: CreatePersonDto) {
    const expiresAt =
      dto.expiresAt ?? new Date(Date.now() + DEFAULT_EXPIRY_DAYS * 24 * 60 * 60 * 1000).toISOString();

    const person = await this.prisma.person.create({
      data: {
        alias: dto.alias,
        approxAgeBand: dto.approxAgeBand,
        genderOpt: dto.genderOpt,
        healthFlags: dto.healthFlags,
        photoRef: dto.photoRef,
        guardianId: dto.guardianId,
        issuingOrg: dto.issuingOrg,
        consentRecord: dto.consentRecord,
        expiresAt: new Date(expiresAt),
      },
    });

    const payload = {
      personId: person.id,
      issuingOrg: person.issuingOrg,
      expiresAt: person.expiresAt.toISOString(),
      schemaVersion: person.schemaVersion,
      nonce: randomUUID(),
    };
    const signedQr = await this.signerService.sign(payload);

    await this.auditService.log({
      action: 'person.created',
      personId: person.id,
      fieldsChanged: { alias: person.alias, approxAgeBand: person.approxAgeBand },
    });

    return {
      person,
      signedQr,
      expiresAt: person.expiresAt,
    };
  }
}

