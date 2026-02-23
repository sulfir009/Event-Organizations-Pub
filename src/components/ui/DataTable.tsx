import { Column } from '../../types/ui';

interface DataTableProps<T> {
  columns: Column<T>[];
  rows: T[];
}

export const DataTable = <T,>({ columns, rows }: DataTableProps<T>) => (
  <div className="overflow-hidden rounded-2xl border border-white/50">
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead className="bg-violet-50/80 text-left text-xs uppercase tracking-wide text-violet-600">
          <tr>
            {columns.map((column) => (
              <th key={String(column.key)} className="px-4 py-3 font-semibold">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="border-t border-violet-100/80 text-ink even:bg-white/40">
              {columns.map((column) => (
                <td key={String(column.key)} className="px-4 py-3">
                  {String(row[column.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
