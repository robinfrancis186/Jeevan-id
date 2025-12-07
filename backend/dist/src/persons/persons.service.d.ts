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
        person: any;
        signedQr: string;
        expiresAt: any;
    }>;
}
