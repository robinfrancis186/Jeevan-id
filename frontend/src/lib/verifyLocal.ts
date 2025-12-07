import { importJWK, type CompactVerifyResult, compactVerify } from 'jose'
import { getCachedJwks, getCachedCrl } from './cache'

type VerifyResult = {
  payload: any
  status: { expired: boolean; revoked: boolean; revocationReason?: string; revocationAt?: string }
}

export async function verifyLocally(jws: string): Promise<VerifyResult> {
  const jwks = getCachedJwks()?.data
  if (!jwks?.keys?.length) {
    throw new Error('No cached JWKS available')
  }

  let verified: CompactVerifyResult | null = null
  let lastError: Error | null = null
  for (const key of jwks.keys) {
    try {
      const cryptoKey = await importJWK(key, key.alg || 'ES256')
      verified = await compactVerify(jws, cryptoKey)
      break
    } catch (err) {
      lastError = err as Error
    }
  }
  if (!verified) {
    throw lastError ?? new Error('Verification failed')
  }

  const payload = JSON.parse(new TextDecoder().decode(verified.payload))
  const now = Date.now()
  const expMs = payload?.expiresAt ? new Date(payload.expiresAt).getTime() : NaN
  const expired = Number.isFinite(expMs) && expMs < now

  const crl = getCachedCrl()?.data
  const revokedEntry = crl?.revocations?.find((r: any) => r.personId === payload.personId)

  return {
    payload,
    status: {
      expired,
      revoked: Boolean(revokedEntry),
      revocationReason: revokedEntry?.reason,
      revocationAt: revokedEntry?.createdAt,
    },
  }
}

