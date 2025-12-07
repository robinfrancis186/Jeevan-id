import { Injectable, Logger } from '@nestjs/common';
import { exportJWK, generateKeyPair, importJWK, JWK, SignJWT, jwtVerify } from 'jose';

type Payload = {
  personId: string;
  issuingOrg: string;
  expiresAt: string;
  schemaVersion: string;
  nonce: string;
};

@Injectable()
export class SignerService {
  private privateKey: CryptoKey | null = null;
  private publicJwk: JWK | null = null;
  private readonly logger = new Logger(SignerService.name);

  async onModuleInit() {
    await this.ensureKeys();
  }

  private async ensureKeys() {
    if (this.privateKey && this.publicJwk) return;
    const fromEnv = process.env.SIGNER_PRIVATE_JWK;
    const kid = process.env.SIGNER_KID ?? 'app-es256';

    if (fromEnv) {
      const parsed: JWK = JSON.parse(fromEnv);
      const priv = await importJWK(parsed, 'ES256');
      const pub = { ...(await exportJWK(priv)), kid, alg: 'ES256', use: 'sig' };
      this.privateKey = priv;
      this.publicJwk = pub;
      this.logger.log(`Signer keys loaded from env with kid=${kid}`);
      return;
    }

    const { privateKey, publicKey } = await generateKeyPair('ES256');
    this.privateKey = privateKey;
    this.publicJwk = { ...(await exportJWK(publicKey)), kid, alg: 'ES256', use: 'sig' };
    this.logger.warn(
      'Signer keys generated ephemerally. Set SIGNER_PRIVATE_JWK and SIGNER_KID for persistence.',
    );
  }

  async getJwks() {
    await this.ensureKeys();
    return { keys: [this.publicJwk!] };
  }

  async sign(payload: Payload) {
    await this.ensureKeys();
    const kid = this.publicJwk!.kid ?? 'ephemeral-es256';
    const jws = await new SignJWT(payload)
      .setProtectedHeader({ alg: 'ES256', kid })
      .setIssuedAt()
      .setExpirationTime(payload.expiresAt)
      .sign(this.privateKey!);
    return jws;
  }

  async verify(jws: string) {
    await this.ensureKeys();
    const result = await jwtVerify<Payload>(jws, this.privateKey!, {
      algorithms: ['ES256'],
    });
    return result.payload;
  }
}

