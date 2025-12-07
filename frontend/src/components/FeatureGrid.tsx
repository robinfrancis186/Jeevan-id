import { ShieldCheck, WifiOff, Zap, QrCode } from 'lucide-react'

const features = [
  {
    title: 'Rapid Enrollment',
    body: 'Alias, age band, consent, and optional health flags with validation and offline queuing.',
    icon: Zap,
  },
  {
    title: 'Signed QR IDs',
    body: 'JWS-signed payloads with expiry, schema versioning, and revocation awareness.',
    icon: QrCode,
  },
  {
    title: 'Field-Ready & Offline',
    body: 'PWA with IndexedDB queues, JWKS/CRL caching, and graceful conflict resolution.',
    icon: WifiOff,
  },
  {
    title: 'Secure by Default',
    body: 'RBAC, rate limits, CSP/HSTS, and key rotation hooks built into the platform.',
    icon: ShieldCheck,
  },
]

export function FeatureGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {features.map(({ title, body, icon: Icon }) => (
        <article
          key={title}
          className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-50/70 via-white to-white opacity-0 transition group-hover:opacity-100" />
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
          <p className="mt-2 text-sm text-slate-600">{body}</p>
        </article>
      ))}
    </section>
  )
}

