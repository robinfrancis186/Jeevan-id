import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { createPerson } from '../lib/api'
import { CTAButton } from './CTAButton'
import { useEnrollQueue } from '../hooks/useEnrollQueue'

type FieldState = {
  alias: string
  approxAgeBand: string
  issuingOrg: string
  consent: boolean
  healthFlags: string
}

export function EnrollForm() {
  const [form, setForm] = useState<FieldState>({
    alias: '',
    approxAgeBand: '',
    issuingOrg: '',
    consent: false,
    healthFlags: '',
  })

  const mutation = useMutation({
    mutationFn: () =>
      createPerson({
        alias: form.alias,
        approxAgeBand: form.approxAgeBand,
        issuingOrg: form.issuingOrg,
        consentRecord: { consent: form.consent, timestamp: new Date().toISOString() },
        healthFlags: form.healthFlags ? { notes: form.healthFlags } : undefined,
      }),
  })

  const onChange = (key: keyof FieldState) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = key === 'consent' ? e.target.checked : e.target.value
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const canSubmit =
    form.alias.trim() &&
    form.approxAgeBand.trim() &&
    form.issuingOrg.trim() &&
    form.consent &&
    !mutation.isPending

  const { enqueue, queue, sync, syncing, error: queueError } = useEnrollQueue()

  const handleSubmit = () => {
    if (!navigator.onLine) {
      void enqueue({
        alias: form.alias,
        approxAgeBand: form.approxAgeBand,
        issuingOrg: form.issuingOrg,
        consentRecord: { consent: form.consent, timestamp: new Date().toISOString() },
        healthFlags: form.healthFlags ? { notes: form.healthFlags } : undefined,
      })
      return
    }
    mutation.mutate()
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">Enrollment (online path)</h3>
        <span className="text-xs font-medium text-brand-700">API-backed</span>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <label className="space-y-1 text-sm text-slate-700">
          <span>Alias</span>
          <input
            value={form.alias}
            onChange={onChange('alias')}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
            placeholder="e.g., Asha K."
          />
        </label>
        <label className="space-y-1 text-sm text-slate-700">
          <span>Approx age band</span>
          <input
            value={form.approxAgeBand}
            onChange={onChange('approxAgeBand')}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
            placeholder="e.g., 25-35"
          />
        </label>
        <label className="space-y-1 text-sm text-slate-700">
          <span>Issuing org</span>
          <input
            value={form.issuingOrg}
            onChange={onChange('issuingOrg')}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
            placeholder="e.g., Field Ops Team"
          />
        </label>
        <label className="space-y-1 text-sm text-slate-700">
          <span>Health flags (optional)</span>
          <input
            value={form.healthFlags}
            onChange={onChange('healthFlags')}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
            placeholder="e.g., diabetic"
          />
        </label>
        <label className="flex items-center gap-2 text-sm text-slate-700 md:col-span-2">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={onChange('consent')}
            className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
          />
          <span>I have obtained consent to create this temporary ID.</span>
        </label>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <CTAButton disabled={!canSubmit} onClick={handleSubmit}>
          {mutation.isPending ? 'Submitting…' : navigator.onLine ? 'Submit enrollment' : 'Queue offline'}
        </CTAButton>
        {!navigator.onLine ? (
          <span className="text-xs text-amber-700">Offline detected: will queue locally</span>
        ) : null}
        {mutation.isError ? (
          <span className="text-sm text-red-600">{(mutation.error as Error).message}</span>
        ) : null}
        {mutation.isSuccess ? (
          <span className="text-sm text-green-600">
            Created ID {mutation.data.person.id} — QR (stub): {mutation.data.signedQr}
          </span>
        ) : null}
      </div>
      <p className="mt-3 text-xs text-slate-500">
        Offline queueing will store enrollments locally when the network is unavailable and replay
        them when online. This online path hits the live API at
        {' '}{import.meta.env.VITE_API_URL || 'http://localhost:3000/api'}.
      </p>
      <div className="mt-3 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-3 text-xs text-slate-700">
        <div className="flex items-center justify-between">
          <span>Queued enrollments: {queue.length}</span>
          <CTAButton variant="ghost" className="px-3 py-1 text-xs" onClick={() => sync()} disabled={syncing}>
            {syncing ? 'Syncing…' : 'Sync now'}
          </CTAButton>
        </div>
        {queueError ? <p className="text-red-600 mt-1">{queueError}</p> : null}
        {queue.length > 0 ? (
          <ul className="mt-2 space-y-1">
            {queue.map((item) => (
              <li key={item.id} className="flex items-center justify-between">
                <span>{(item.payload as any).alias} · {(item.payload as any).approxAgeBand}</span>
                <span className="text-slate-500">
                  {new Date(item.createdAt).toLocaleTimeString()}
                </span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  )
}

