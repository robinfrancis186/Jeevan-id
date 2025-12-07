import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRevocationDto } from './dto/create-revocation.dto';
import { createHash } from 'node:crypto';
import { AuditService } from '../audit/audit.service';

@Injectable()
export class RevocationsService {
  constructor(
    private prisma: PrismaService,
    private auditService: AuditService,
  ) {}

  async create(dto: CreateRevocationDto) {
    const revocation = await this.prisma.revocation.create({
      data: {
        personId: dto.personId,
        reason: dto.reason,
      },
    });
    await this.auditService.log({
      action: 'person.revoked',
      personId: dto.personId,
      fieldsChanged: { reason: dto.reason },
    });
    return revocation;
  }

  async list() {
    const revocations = await this.prisma.revocation.findMany({
      orderBy: { createdAt: 'desc' },
      select: { personId: true, reason: true, createdAt: true },
    });
    const version = createHash('sha256')
      .update(JSON.stringify(revocations))
      .digest('hex')
      .slice(0, 12);
    return { version, revocations };
  }
}

