const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'
const JWKS_KEY = 'jeevan_jwks'
const CRL_KEY = 'jeevan_crl'

type Stored<T> = { data: T; updatedAt: number }

function setItem<T>(key: string, data: T) {
  localStorage.setItem(key, JSON.stringify({ data, updatedAt: Date.now() }))
}

function getItem<T>(key: string): Stored<T> | null {
  const raw = localStorage.getItem(key)
  if (!raw) return null
  try {
    return JSON.parse(raw) as Stored<T>
  } catch {
    return null
  }
}

export async function fetchAndCacheJwks() {
  const res = await fetch(`${API_BASE}/jwks`)
  if (!res.ok) throw new Error('Failed to fetch JWKS')
  const data = await res.json()
  setItem(JWKS_KEY, data)
  return data
}

export function getCachedJwks() {
  return getItem<any>(JWKS_KEY)
}

export async function fetchAndCacheCrl() {
  const res = await fetch(`${API_BASE}/revocations`)
  if (!res.ok) throw new Error('Failed to fetch revocations')
  const data = await res.json()
  setItem(CRL_KEY, data)
  return data
}

export function getCachedCrl() {
  return getItem<any>(CRL_KEY)
}

