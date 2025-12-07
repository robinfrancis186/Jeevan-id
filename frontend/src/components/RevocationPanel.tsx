import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { createRevocation, listRevocations } from '../lib/api'
import { useState } from 'react'
import { CTAButton } from './CTAButton'

export function RevocationPanel() {
  const qc = useQueryClient()
  const { data, isLoading, error } = useQuery({
    queryKey: ['revocations'],
    queryFn: () => listRevocations(),
  })

  const [personId, setPersonId] = useState('')
  const [reason, setReason] = useState('')

  const mutation = useMutation({
    mutationFn: () => createRevocation(personId, reason),
    onSuccess: () => {
      setPersonId('')
      setReason('')
      qc.invalidateQueries({ queryKey: ['revocations'] })
    },
  })

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">Revocations</h3>
        <span className="text-xs text-slate-500">Version: {data?.version ?? '—'}</span>
      </div>
      <div className="mt-3 grid gap-3 md:grid-cols-[1.2fr,1fr,auto]">
        <input
          value={personId}
          onChange={(e) => setPersonId(e.target.value)}
          placeholder="Person ID"
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
        />
        <input
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Reason (optional)"
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
        />
        <CTAButton disabled={!personId || mutation.isPending} onClick={() => mutation.mutate()}>
          {mutation.isPending ? 'Revoking…' : 'Revoke'}
        </CTAButton>
      </div>
      {mutation.isError ? (
        <p className="text-sm text-red-600 mt-1">{(mutation.error as Error).message}</p>
      ) : null}
      {mutation.isSuccess ? <p className="text-sm text-green-600 mt-1">Revoked</p> : null}

      <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-800">
        {isLoading ? (
          <p>Loading…</p>
        ) : error ? (
          <p className="text-red-600">{(error as Error).message}</p>
        ) : data && data.revocations.length > 0 ? (
          <ul className="space-y-2">
            {data.revocations.map((r) => (
              <li key={`${r.personId}-${r.createdAt}`} className="flex items-center justify-between">
                <span>
                  {r.personId} {r.reason ? `· ${r.reason}` : ''}
                </span>
                <span className="text-slate-500 text-xs">{new Date(r.createdAt).toLocaleString()}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No revocations.</p>
        )}
      </div>
    </div>
  )
}

