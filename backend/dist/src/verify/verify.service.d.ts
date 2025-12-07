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
            id: any;
            alias: any;
            approxAgeBand: any;
            issuingOrg: any;
            expiresAt: any;
        };
        status: {
            expired: boolean;
            revoked: boolean;
            revocationReason: any;
            revocationAt: any;
        };
    }>;
}
