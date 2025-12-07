import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { verifyJws } from '../lib/api'
import { CTAButton } from './CTAButton'

export function VerifyForm() {
  const [jws, setJws] = useState('')
  const mutation = useMutation({
    mutationFn: () => verifyJws(jws),
  })

  const canSubmit = jws.trim().length > 0 && !mutation.isPending

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">Verify QR (paste JWS)</h3>
        <span className="text-xs font-medium text-brand-700">Signature + revocation checks</span>
      </div>
      <div className="mt-3 space-y-3">
        <textarea
          value={jws}
          onChange={(e) => setJws(e.target.value)}
          rows={4}
          className="w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
          placeholder="Paste the signed QR payload (JWS)..."
        />
        <div className="flex items-center gap-3">
          <CTAButton disabled={!canSubmit} onClick={() => mutation.mutate()}>
            {mutation.isPending ? 'Verifying…' : 'Verify'}
          </CTAButton>
          {mutation.isError ? (
            <span className="text-sm text-red-600">{(mutation.error as Error).message}</span>
          ) : null}
        </div>
        {mutation.isSuccess ? (
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800">
            <p className="font-semibold text-slate-900">Result</p>
            <p>ID: {mutation.data.person.id}</p>
            <p>
              Alias: {mutation.data.person.alias} • Age: {mutation.data.person.approxAgeBand}
            </p>
            <p>Issuing org: {mutation.data.person.issuingOrg}</p>
            <p>Expires: {new Date(mutation.data.person.expiresAt).toLocaleString()}</p>
            <p>
              Status:{' '}
              {mutation.data.status.revoked
                ? `Revoked (${mutation.data.status.revocationReason ?? 'no reason'})`
                : mutation.data.status.expired
                  ? 'Expired'
                  : 'Valid'}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  )
}

