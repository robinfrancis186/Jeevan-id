import { useEffect, useState, useCallback } from 'react'
import { createPerson } from '../lib/api'
import { enqueueEnroll, listEnrollQueue, removeEnroll } from '../lib/queue'

type QueueItem = {
  id: string
  payload: Record<string, unknown>
  createdAt: number
}

export function useEnrollQueue() {
  const [queue, setQueue] = useState<QueueItem[]>([])
  const [syncing, setSyncing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const refresh = useCallback(async () => {
    const all = await listEnrollQueue()
    setQueue(all.sort((a, b) => a.createdAt - b.createdAt))
  }, [])

  useEffect(() => {
    void refresh()
  }, [refresh])

  const enqueue = useCallback(
    async (payload: Record<string, unknown>) => {
      await enqueueEnroll(payload)
      await refresh()
    },
    [refresh],
  )

  const sync = useCallback(async () => {
    setSyncing(true)
    setError(null)
    const all = await listEnrollQueue()
    for (const item of all) {
      try {
        await createPerson(item.payload as any)
        await removeEnroll(item.id)
      } catch (err) {
        setError((err as Error).message)
        break
      }
    }
    await refresh()
    setSyncing(false)
  }, [refresh])

  useEffect(() => {
    const handler = () => {
      if (navigator.onLine) {
        void sync()
      }
    }
    window.addEventListener('online', handler)
    return () => window.removeEventListener('online', handler)
  }, [sync])

  return { queue, enqueue, sync, syncing, error }
}

