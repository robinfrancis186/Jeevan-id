import { useEffect, useState } from 'react'
import { QrScanner } from '@yudiel/react-qr-scanner'
import { useMutation } from '@tanstack/react-query'
import { verifyJws } from '../lib/api'
import { CTAButton } from './CTAButton'
import { fetchAndCacheCrl, fetchAndCacheJwks } from '../lib/cache'
import { verifyLocally } from '../lib/verifyLocal'

export function QRScanner() {
  const [permissionError, setPermissionError] = useState<string | null>(null)
  const [cacheInfo, setCacheInfo] = useState<string>('Syncing JWKS/CRL…')
  const [lastJws, setLastJws] = useState<string | null>(null)
  const mutation = useMutation({
    mutationFn: (text: string) => verifyJws(text),
    onSuccess: (_data, variables) => setLastJws(variables),
  })
  const [offlineResult, setOfflineResult] = useState<{
    payload: any
    status: { expired: boolean; revoked: boolean; revocationReason?: string; revocationAt?: string }
  } | null>(null)

  useEffect(() => {
    const sync = async () => {
      try {
        await fetchAndCacheJwks()
        await fetchAndCacheCrl()
        setCacheInfo('JWKS/CRL cached for offline use')
      } catch (err) {
        setCacheInfo(`Cache error: ${(err as Error).message}`)
      }
    }
    sync()
    const timer = window.setInterval(sync, 5 * 60 * 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    // Reset errors when camera is available again
    setPermissionError(null)
  }, [])

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">Camera QR Scanner</h3>
        <span className="text-xs font-medium text-brand-700">Offline-capable once cached</span>
      </div>
      <div className="mt-3 grid gap-4 lg:grid-cols-[1fr,1fr]">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-black/60">
          <QrScanner
            onDecode={(text) => {
              setLastJws(text)
              mutation.mutate(text)
            }}
            onError={(err) => setPermissionError(err?.message ?? 'Camera error')}
            constraints={{ facingMode: 'environment' }}
            containerStyle={{ width: '100%', minHeight: '240px' }}
            videoStyle={{ width: '100%' }}
          />
        </div>
        <div className="space-y-2 text-sm text-slate-700">
          {permissionError ? (
            <p className="text-red-600">Camera error: {permissionError}</p>
          ) : (
            <p className="text-slate-600">
              Aim the camera at a Jeevan ID QR. We will verify signature, expiry, and revocation.
            </p>
          )}
          <p className="text-xs text-slate-500">{cacheInfo}</p>
          {mutation.isPending ? <p className="text-brand-700">Verifying…</p> : null}
          {mutation.isError ? (
            <p className="text-red-600">{(mutation.error as Error).message}</p>
          ) : null}
          {offlineResult ? (
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">Offline verification</p>
              <p className="text-slate-700">Person ID: {offlineResult.payload.personId}</p>
              <p className="text-slate-700">Expires: {offlineResult.payload.expiresAt}</p>
              <p className="text-slate-700">
                Status:{' '}
                {offlineResult.status.revoked
                  ? `Revoked (${offlineResult.status.revocationReason ?? 'no reason'})`
                  : offlineResult.status.expired
                    ? 'Expired'
                    : 'Valid'}
              </p>
            </div>
          ) : null}
          {mutation.isSuccess ? (
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">Verified</p>
              <p className="text-slate-700">ID: {mutation.data.person.id}</p>
              <p className="text-slate-700">Alias: {mutation.data.person.alias}</p>
              <p className="text-slate-700">Age: {mutation.data.person.approxAgeBand}</p>
              <p className="text-slate-700">Issuing org: {mutation.data.person.issuingOrg}</p>
              <p className="text-slate-700">
                Status:{' '}
                {mutation.data.status.revoked
                  ? `Revoked (${mutation.data.status.revocationReason ?? 'no reason'})`
                  : mutation.data.status.expired
                    ? 'Expired'
                    : 'Valid'}
              </p>
            </div>
          ) : null}
          <div className="pt-2">
            <div className="flex flex-wrap gap-2">
              <CTAButton variant="ghost" className="px-3 py-1 text-xs" onClick={() => mutation.reset()}>
                Reset
              </CTAButton>
              <CTAButton
                variant="ghost"
                className="px-3 py-1 text-xs"
                onClick={async () => {
                  try {
                    await fetchAndCacheJwks()
                    await fetchAndCacheCrl()
                    setCacheInfo('JWKS/CRL refreshed')
                  } catch (err) {
                    setCacheInfo(`Cache error: ${(err as Error).message}`)
                  }
                }}
              >
                Refresh caches
              </CTAButton>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              <CTAButton
                variant="ghost"
                className="px-3 py-1 text-xs"
                disabled={!lastJws}
                onClick={() => {
                  if (lastJws) {
                    void verifyLocally(lastJws).then(setOfflineResult).catch(console.error)
                  }
                }}
              >
                Verify last scan offline
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

