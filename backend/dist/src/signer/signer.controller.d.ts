import { SignerService } from './signer.service';
export declare class SignerController {
    private readonly signerService;
    constructor(signerService: SignerService);
    getJwks(): Promise<{
        keys: import("jose", { with: { "resolution-mode": "import" } }).JWK[];
    }>;
}
