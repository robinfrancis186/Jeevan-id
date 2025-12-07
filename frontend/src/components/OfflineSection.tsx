import { WifiOff, CloudFog, AlertTriangle } from 'lucide-react'

const offlinePoints = [
  'Service Worker pre-caches shell and assets for instant boot.',
  'IndexedDB queues enrollment/updates; retries with backoff.',
  'JWKS + CRL cached with timestamps for offline verification.',
  'Grace window messaging when keys are stale; guided recovery.',
]

export function OfflineSection() {
  return (
    <section id="offline" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2 text-brand-700">
        <WifiOff className="h-5 w-5" />
        <h2 className="text-xl font-semibold text-slate-900">Offline-ready PWA</h2>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {offlinePoints.map((point) => (
          <div key={point} className="flex items-start gap-3 rounded-xl bg-slate-50 p-4">
            <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
            <p className="text-sm text-slate-700">{point}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-brand-700">
          <CloudFog className="h-4 w-4" /> Resilient sync
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-brand-700">
          <AlertTriangle className="h-4 w-4" /> Conflict policy: last-write with audit
        </span>
      </div>
    </section>
  )
}

