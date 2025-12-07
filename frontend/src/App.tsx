import { useRegisterSW } from 'virtual:pwa-register/react'
import { NavBar } from './components/NavBar'
import { HeroSection } from './components/HeroSection'
import { FeatureGrid } from './components/FeatureGrid'
import { OfflineSection } from './components/OfflineSection'
import { Timeline } from './components/Timeline'
import { Loader } from './components/Loader'
import { Modal } from './components/Modal'
import { CTAButton } from './components/CTAButton'
import { useState } from 'react'
import { EnrollForm } from './components/EnrollForm'
import { VerifyForm } from './components/VerifyForm'
import { QRScanner } from './components/QRScanner'
import { RevocationPanel } from './components/RevocationPanel'
import { AuditList } from './components/AuditList'
import { useBackgroundCaches } from './hooks/useBackgroundCaches'

function App() {
  useRegisterSW({ immediate: true })
  const [showModal, setShowModal] = useState(false)
  const cacheStatus = useBackgroundCaches()

  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />

      <main className="mx-auto max-w-6xl px-4 pb-16">
        <FeatureGrid />

        <section id="enroll" className="mt-10 grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-slate-900">App slices to build</h2>
              <div className="flex gap-2">
                <CTAButton onClick={() => setShowModal(true)}>Enroll</CTAButton>
                <CTAButton variant="ghost">Verify</CTAButton>
              </div>
            </div>
            <div className="mt-4">
              <EnrollForm />
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-800">Enrollment</p>
                <p className="text-sm text-slate-600">
                  Validate input, capture consent, queue offline, and request signed QR payloads.
                </p>
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-800">Verification</p>
                <p className="text-sm text-slate-600">
                  Camera scan → verify signature offline → check expiry and revocation cache.
                </p>
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-800">Revocation</p>
                <p className="text-sm text-slate-600">
                  Admin revoke UI, CRL fetch with ETags, and grace window handling.
                </p>
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-800">Audit & Reporting</p>
                <p className="text-sm text-slate-600">
                  Append-only audit log and issuance/verification dashboards.
                </p>
              </div>
            </div>
          </div>

          <OfflineSection />
        </section>

        <section id="verify" className="mt-10 grid gap-6 lg:grid-cols-[1fr,1fr]">
          <VerifyForm />
          <div className="space-y-6">
            <Loader
              steps={[
                { label: 'Capture + validate enrollment payload', status: 'done' },
                { label: 'Sign QR payload (JWS) with expiry', status: 'done' },
                { label: 'Cache JWKS/CRL + offline verify', status: cacheStatus.jwksAt ? 'done' : 'pending' },
                { label: 'Audit log + telemetry', status: 'done' },
              ]}
            />
            <Timeline />
          </div>
        </section>

        <section id="scanner" className="mt-10">
          <QRScanner />
        </section>

        <section id="revoke" className="mt-10 grid gap-6 lg:grid-cols-[1fr,1fr]">
          <RevocationPanel />
          <AuditList />
        </section>
      </main>

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        title="Enrollment (preview state)"
        description="This modal will host the enrollment form with consent and offline queueing."
      >
        <div className="space-y-3 text-sm text-slate-700">
          <p>
            - Alias, age band, optional health flags, consent capture.
            <br />- Offline enqueue with IndexedDB, replay with backoff.
            <br />- Request signed QR payload from backend signer.
          </p>
          <div className="flex gap-2">
            <CTAButton onClick={() => setShowModal(false)}>Close</CTAButton>
            <CTAButton variant="ghost">Go to verifier</CTAButton>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default App
