import { SignerService } from '../signer/signer.service';
import { PrismaService } from '../prisma/prisma.service';
export declare class VerifyService {
    private readonly signerService;
    private readonly prisma;
    constructor(signerService: SignerService, prisma: PrismaService);
    verify(jws: string): Promise<{
        payload: {
            personId: string;
            issuingOrg: string;
            expiresAt: string;
            schemaVersion: string;
            nonce: string;
        };
        person: {
            id: string;
            alias: string;
            approxAgeBand: string;
            issuingOrg: string;
            expiresAt: Date;
        };
        status: {
            expired: boolean;
            revoked: boolean;
            revocationReason: string | null | undefined;
            revocationAt: Date | undefined;
        };
    }>;
}
