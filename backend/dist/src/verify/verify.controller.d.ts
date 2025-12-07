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
    } | {
        error: string;
    }>;
}
export {};
