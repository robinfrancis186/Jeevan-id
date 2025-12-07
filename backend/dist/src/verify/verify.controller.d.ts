import { VerifyService } from './verify.service';
declare class VerifyDto {
    jws: string;
}
export declare class VerifyController {
    private readonly verifyService;
    constructor(verifyService: VerifyService);
    verify(body: VerifyDto): Promise<{
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
    } | {
        error: string;
    }>;
}
export {};
