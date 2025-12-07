type BackgroundAuroraProps = {
  children: React.ReactNode
}

// Lightweight aurora-style background inspired by Tailwind effect patterns.
export function BackgroundAurora({ children }: BackgroundAuroraProps) {
  return (
    <div className="relative isolate overflow-hidden rounded-3xl border border-slate-200 bg-white/70 shadow-sm shadow-brand-200 backdrop-blur-sm">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-[-10%] h-48 w-48 rounded-full bg-brand-200 blur-3xl opacity-60" />
        <div className="absolute right-1/3 top-1/3 h-56 w-56 rounded-full bg-blue-200 blur-3xl opacity-50" />
        <div className="absolute left-1/3 bottom-0 h-40 w-40 rounded-full bg-indigo-200 blur-3xl opacity-50" />
      </div>
      {children}
    </div>
  )
}

