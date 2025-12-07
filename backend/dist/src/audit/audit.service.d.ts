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
    }): Promise<{
        id: string;
        createdAt: Date;
        personId: string | null;
        actorId: string;
        action: string;
        fieldsChanged: import("@prisma/client/runtime/client").JsonValue | null;
        deviceId: string | null;
        offlineTxnId: string | null;
    }>;
    list(limit?: number): Promise<{
        id: string;
        createdAt: Date;
        personId: string | null;
        actorId: string;
        action: string;
        fieldsChanged: import("@prisma/client/runtime/client").JsonValue | null;
        deviceId: string | null;
        offlineTxnId: string | null;
    }[]>;
}
