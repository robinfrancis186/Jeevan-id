import { JWK } from 'jose';
type Payload = {
    personId: string;
    issuingOrg: string;
    expiresAt: string;
    schemaVersion: string;
    nonce: string;
};
export declare class SignerService {
    private privateKey;
    private publicJwk;
    private readonly logger;
    onModuleInit(): Promise<void>;
    private ensureKeys;
    getJwks(): Promise<{
        keys: JWK[];
    }>;
    sign(payload: Payload): Promise<string>;
    verify(jws: string): Promise<Payload & import("jose", { with: { "resolution-mode": "import" } }).JWTPayload>;
}
export {};
