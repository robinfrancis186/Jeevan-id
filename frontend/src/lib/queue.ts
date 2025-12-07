import { openDB } from 'idb'

const DB_NAME = 'jeevan-id'
const STORE = 'enrollQueue'

type EnrollRecord = {
  id: string
  payload: Record<string, unknown>
  createdAt: number
}

async function getDb() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE, { keyPath: 'id' })
      }
    },
  })
}

export async function enqueueEnroll(payload: Record<string, unknown>) {
  const db = await getDb()
  const record: EnrollRecord = {
    id: crypto.randomUUID(),
    payload,
    createdAt: Date.now(),
  }
  await db.put(STORE, record)
  return record
}

export async function listEnrollQueue(): Promise<EnrollRecord[]> {
  const db = await getDb()
  return (await db.getAll(STORE)) as EnrollRecord[]
}

export async function removeEnroll(id: string) {
  const db = await getDb()
  await db.delete(STORE, id)
}

