"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SignerService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignerService = void 0;
const common_1 = require("@nestjs/common");
const jose_1 = require("jose");
let SignerService = SignerService_1 = class SignerService {
    privateKey = null;
    publicJwk = null;
    logger = new common_1.Logger(SignerService_1.name);
    async onModuleInit() {
        await this.ensureKeys();
    }
    async ensureKeys() {
        if (this.privateKey && this.publicJwk)
            return;
        const fromEnv = process.env.SIGNER_PRIVATE_JWK;
        const kid = process.env.SIGNER_KID ?? 'app-es256';
        if (fromEnv) {
            const parsed = JSON.parse(fromEnv);
            const priv = await (0, jose_1.importJWK)(parsed, 'ES256');
            const pub = { ...(await (0, jose_1.exportJWK)(priv)), kid, alg: 'ES256', use: 'sig' };
            this.privateKey = priv;
            this.publicJwk = pub;
            this.logger.log(`Signer keys loaded from env with kid=${kid}`);
            return;
        }
        const { privateKey, publicKey } = await (0, jose_1.generateKeyPair)('ES256');
        this.privateKey = privateKey;
        this.publicJwk = {
            ...(await (0, jose_1.exportJWK)(publicKey)),
            kid,
            alg: 'ES256',
            use: 'sig',
        };
        this.logger.warn('Signer keys generated ephemerally. Set SIGNER_PRIVATE_JWK and SIGNER_KID for persistence.');
    }
    async getJwks() {
        await this.ensureKeys();
        return { keys: [this.publicJwk] };
    }
    async sign(payload) {
        await this.ensureKeys();
        const kid = this.publicJwk.kid ?? 'ephemeral-es256';
        const jws = await new jose_1.SignJWT(payload)
            .setProtectedHeader({ alg: 'ES256', kid })
            .setIssuedAt()
            .setExpirationTime(payload.expiresAt)
            .sign(this.privateKey);
        return jws;
    }
    async verify(jws) {
        await this.ensureKeys();
        const result = await (0, jose_1.jwtVerify)(jws, this.privateKey, {
            algorithms: ['ES256'],
        });
        return result.payload;
    }
};
exports.SignerService = SignerService;
exports.SignerService = SignerService = SignerService_1 = __decorate([
    (0, common_1.Injectable)()
], SignerService);
//# sourceMappingURL=signer.service.js.map