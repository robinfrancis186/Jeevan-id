const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

type CreatePersonInput = {
  alias: string
  approxAgeBand: string
  issuingOrg: string
  consentRecord: Record<string, unknown>
  healthFlags?: Record<string, unknown>
  genderOpt?: string
  guardianId?: string
  photoRef?: string
  expiresAt?: string
}

export async function createPerson(input: CreatePersonInput) {
  const res = await fetch(`${API_BASE}/persons`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || 'Failed to create person')
  }

  return res.json() as Promise<{
    person: { id: string; alias: string; approxAgeBand: string; expiresAt: string }
    signedQr: string
    expiresAt: string
  }>
}

export async function verifyJws(jws: string) {
  const res = await fetch(`${API_BASE}/verify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ jws }),
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || 'Failed to verify')
  }
  return res.json() as Promise<{
    payload: { personId: string; issuingOrg: string; expiresAt: string; schemaVersion: string }
    person: { id: string; alias: string; approxAgeBand: string; issuingOrg: string; expiresAt: string }
    status: { expired: boolean; revoked: boolean; revocationReason?: string; revocationAt?: string }
  }>
}

export async function listRevocations() {
  const res = await fetch(`${API_BASE}/revocations`)
  if (!res.ok) throw new Error('Failed to fetch revocations')
  return res.json() as Promise<{ version: string; revocations: Array<{ personId: string; reason?: string; createdAt: string }> }>
}

export async function createRevocation(personId: string, reason?: string) {
  const res = await fetch(`${API_BASE}/revocations`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ personId, reason }),
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || 'Failed to revoke')
  }
  return res.json()
}

export async function listAudit(limit = 50) {
  const res = await fetch(`${API_BASE}/audit?limit=${limit}`)
  if (!res.ok) throw new Error('Failed to fetch audit')
  return res.json() as Promise<
    Array<{ id: string; action: string; personId?: string; createdAt: string; fieldsChanged?: Record<string, unknown> }>
  >
}

