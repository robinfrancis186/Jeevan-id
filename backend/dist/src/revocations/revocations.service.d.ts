import { PrismaService } from '../prisma/prisma.service';
import { CreateRevocationDto } from './dto/create-revocation.dto';
import { AuditService } from '../audit/audit.service';
export declare class RevocationsService {
    private prisma;
    private auditService;
    constructor(prisma: PrismaService, auditService: AuditService);
    create(dto: CreateRevocationDto): Promise<{
        id: string;
        createdAt: Date;
        personId: string;
        reason: string | null;
    }>;
    list(): Promise<{
        version: string;
        revocations: {
            createdAt: Date;
            personId: string;
            reason: string | null;
        }[];
    }>;
}
