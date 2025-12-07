type TimelineItem = {
  title: string
  detail: string
  status?: 'pending' | 'done' | 'warning'
}

const items: TimelineItem[] = [
  {
    title: 'Enroll → Sign QR',
    detail: 'Alias + consent captured; signed payload issued.',
    status: 'done',
  },
  {
    title: 'Verify (offline-capable)',
    detail: 'Scanner validates JWS signature and expiry.',
    status: 'pending',
  },
  {
    title: 'Revocation / CRL',
    detail: 'Admin revokes; CRL cached with ETag.',
    status: 'pending',
  },
  {
    title: 'Audit surfacing',
    detail: 'Append-only logs per action and device.',
    status: 'warning',
  },
]

export function Timeline() {
  return (
    <section
      id="audit"
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-2 lg:col-span-1"
    >
      <h2 className="text-xl font-semibold text-slate-900">Lifecycle timeline</h2>
      <div className="mt-4 space-y-4">
        {items.map((item, idx) => (
          <div key={item.title} className="relative pl-7">
            <span
              className={`absolute left-1 top-2 h-3 w-3 rounded-full ${
                item.status === 'done'
                  ? 'bg-green-500'
                  : item.status === 'warning'
                    ? 'bg-amber-500'
                    : 'bg-brand-500'
              }`}
            />
            {idx < items.length - 1 && (
              <span className="absolute left-[0.625rem] top-5 h-full w-px bg-slate-200" />
            )}
            <p className="text-sm font-semibold text-slate-900">{item.title}</p>
            <p className="text-sm text-slate-600">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

