import { PrismaService } from '../prisma/prisma.service';
export declare class AuditService {
    private prisma;
    constructor(prisma: PrismaService);
    log(data: {
        actorId?: string;
        action: string;
        personId?: string;
        fieldsChanged?: Record<string, unknown>;
        deviceId?: string;
        offlineTxnId?: string;
    }): Promise<any>;
    list(limit?: number): Promise<any>;
}
