import { useEffect, useState } from 'react'
import { fetchAndCacheCrl, fetchAndCacheJwks, getCachedCrl, getCachedJwks } from '../lib/cache'

export function useBackgroundCaches() {
  const [status, setStatus] = useState<{ jwksAt?: number; crlAt?: number; error?: string }>({})

  useEffect(() => {
    const hydrate = () => {
      setStatus({
        jwksAt: getCachedJwks()?.updatedAt,
        crlAt: getCachedCrl()?.updatedAt,
      })
    }
    hydrate()

    const sync = async () => {
      try {
        await fetchAndCacheJwks()
        await fetchAndCacheCrl()
        hydrate()
      } catch (err) {
        setStatus((prev) => ({ ...prev, error: (err as Error).message }))
      }
    }

    sync()
    const interval = window.setInterval(sync, 5 * 60 * 1000) // every 5 min
    window.addEventListener('online', sync)
    return () => {
      clearInterval(interval)
      window.removeEventListener('online', sync)
    }
  }, [])

  return status
}

