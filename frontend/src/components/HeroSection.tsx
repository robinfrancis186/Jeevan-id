import { CloudLightning, QrCode } from 'lucide-react'
import { CTAButton } from './CTAButton'
import { BackgroundAurora } from './BackgroundAurora'

const nextSteps = [
  'Wire API client to backend endpoints and OpenAPI-generated types.',
  'Implement enrollment form, offline queue, and QR issuance view.',
  'Build verifier view with camera scan, offline JWKS cache, and CRL check.',
  'Add revocation flows, audit log surfacing, and print/export templates.',
]

export function HeroSection() {
  return (
    <section id="hero" className="mx-auto max-w-6xl px-4 py-14">
      <BackgroundAurora>
        <div className="rounded-3xl bg-gradient-to-br from-white via-white to-blue-50 px-8 py-10 md:px-12 md:py-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
                Jeevan ID
                <CloudLightning className="h-4 w-4" />
              </div>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Temporary, ethical emergency ID for disaster relief
              </h1>
              <p className="max-w-2xl text-base text-slate-600">
                Web-based PWA that works offline. Issue signed QR identities, verify in the field,
                and respect privacy with data minimization and consent-first flows.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-800">
                  React + Vite PWA
                </span>
                <span className="rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-800">
                  Tailwind
                </span>
                <span className="rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-800">
                  Offline-first
                </span>
                <span className="rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-800">
                  QR + JWS
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                <CTAButton>Start Enrollment</CTAButton>
                <CTAButton variant="ghost">Open Verifier</CTAButton>
              </div>
            </div>
            <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <QrCode className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">Current status</p>
                  <p className="font-semibold text-slate-900">Scaffolding ready</p>
                </div>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {nextSteps.map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </BackgroundAurora>
    </section>
  )
}

