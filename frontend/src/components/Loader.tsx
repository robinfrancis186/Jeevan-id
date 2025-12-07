type LoaderProps = {
  steps: Array<{ label: string; status: 'pending' | 'done' | 'active' }>
}

export function Loader({ steps }: LoaderProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-sm font-semibold text-slate-900">Progress</p>
      <div className="mt-3 space-y-3">
        {steps.map((step, idx) => (
          <div key={step.label} className="flex items-center gap-3">
            <div
              className={`h-3 w-3 rounded-full ${
                step.status === 'done'
                  ? 'bg-green-500'
                  : step.status === 'active'
                    ? 'bg-brand-500 animate-pulse'
                    : 'bg-slate-200'
              }`}
            />
            <div className="flex-1">
              <p className="text-sm text-slate-700">{step.label}</p>
              {idx < steps.length - 1 && (
                <div className="mt-2 h-1 w-full rounded-full bg-slate-100">
                  <div
                    className={`h-1 rounded-full ${
                      step.status === 'done'
                        ? 'w-full bg-green-500'
                        : step.status === 'active'
                          ? 'w-1/2 bg-brand-500'
                          : 'w-1/4 bg-slate-200'
                    }`}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

