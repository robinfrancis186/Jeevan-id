import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuditService {
  constructor(private prisma: PrismaService) {}

  async log(data: {
    actorId?: string;
    action: string;
    personId?: string;
    fieldsChanged?: Record<string, unknown>;
    deviceId?: string;
    offlineTxnId?: string;
  }) {
    return this.prisma.audit.create({
      data: {
        actorId: data.actorId ?? 'system',
        action: data.action,
        personId: data.personId,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        fieldsChanged: (data.fieldsChanged ?? {}) as any,
        deviceId: data.deviceId,
        offlineTxnId: data.offlineTxnId,
      },
    });
  }

  async list(limit = 50) {
    return this.prisma.audit.findMany({
      orderBy: { createdAt: 'desc' },
      take: limit,
    });
  }
}
