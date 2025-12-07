import { QrCode, ShieldCheck, WifiOff, Zap } from 'lucide-react'

const links = [
  { label: 'Enroll', href: '#enroll' },
  { label: 'Verify', href: '#verify' },
  { label: 'Offline', href: '#offline' },
  { label: 'Audit', href: '#audit' },
]

export function NavBar() {
  return (
    <div className="sticky top-0 z-20 w-full border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
            <QrCode className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Jeevan ID</p>
            <p className="text-xs text-slate-500">Emergency identity PWA</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative inline-flex items-center gap-1 rounded-full px-3 py-1 transition hover:bg-brand-50 hover:text-brand-700"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 text-slate-500">
          <ShieldCheck className="h-5 w-5" />
          <WifiOff className="h-5 w-5" />
          <Zap className="h-5 w-5" />
        </div>
      </div>
    </div>
  )
}

