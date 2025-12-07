import { PrismaService } from '../prisma/prisma.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { SignerService } from '../signer/signer.service';
import { AuditService } from '../audit/audit.service';
export declare class PersonsService {
    private prisma;
    private signerService;
    private auditService;
    constructor(prisma: PrismaService, signerService: SignerService, auditService: AuditService);
    create(dto: CreatePersonDto): Promise<{
        person: {
            id: string;
            alias: string;
            approxAgeBand: string;
            genderOpt: string | null;
            healthFlags: import("@prisma/client/runtime/client").JsonValue | null;
            photoRef: string | null;
            guardianId: string | null;
            issuingOrg: string;
            consentRecord: import("@prisma/client/runtime/client").JsonValue;
            expiresAt: Date;
            createdAt: Date;
            updatedAt: Date;
            schemaVersion: string;
        };
        signedQr: string;
        expiresAt: Date;
    }>;
}
