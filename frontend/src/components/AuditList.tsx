import { useQuery } from '@tanstack/react-query'
import { listAudit } from '../lib/api'

export function AuditList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['audit'],
    queryFn: () => listAudit(50),
  })

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">Audit log</h3>
        <span className="text-xs text-slate-500">Latest 50</span>
      </div>
      <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-800 max-h-80 overflow-auto">
        {isLoading ? (
          <p>Loading…</p>
        ) : error ? (
          <p className="text-red-600">{(error as Error).message}</p>
        ) : data && data.length > 0 ? (
          <ul className="space-y-2">
            {data.map((item) => (
              <li key={item.id} className="border-b border-slate-100 pb-2 last:border-none last:pb-0">
                <p className="font-medium text-slate-900">{item.action}</p>
                <p className="text-slate-700">
                  Person: {item.personId ?? '—'} | Fields:{' '}
                  {item.fieldsChanged ? JSON.stringify(item.fieldsChanged) : '—'}
                </p>
                <p className="text-xs text-slate-500">{new Date(item.createdAt).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No audit entries.</p>
        )}
      </div>
    </div>
  )
}

