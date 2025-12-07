import { PrismaService } from '../prisma/prisma.service';
import { CreateRevocationDto } from './dto/create-revocation.dto';
import { AuditService } from '../audit/audit.service';
export declare class RevocationsService {
    private prisma;
    private auditService;
    constructor(prisma: PrismaService, auditService: AuditService);
    create(dto: CreateRevocationDto): Promise<any>;
    list(): Promise<{
        version: string;
        revocations: any;
    }>;
}
