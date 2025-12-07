import { AuditService } from './audit.service';
export declare class AuditController {
    private readonly auditService;
    constructor(auditService: AuditService);
    list(limit?: string): Promise<{
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
