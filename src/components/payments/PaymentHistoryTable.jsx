import React from "react";

function PaymentHistoryTable() {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <h2 className="text-xs font-semibold uppercase tracking-widest">
          Payment History
        </h2>
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-100 text-left">
            <th className="px-6 py-3 text-xs font-medium text-slate-400">
              Tenant
            </th>
            <th className="px-6 py-3 text-xs font-medium text-slate-400">
              Room
            </th>
            <th className="px-6 py-3 text-xs font-medium text-slate-400">
              Amount
            </th>
            <th className="px-6 py-3 text-xs font-medium text-slate-400">
              Date Paid
            </th>
            <th className="px-6 py-3 text-xs font-medium text-slate-400">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
            <td className="px-6 py-4 font-medium text-slate-800">
              Juan Dela Cruz
            </td>
            <td className="px-6 py-4 text-slate-500">Room 101</td>
            <td className="px-6 py-4 text-slate-800">₱3,500</td>
            <td className="px-6 py-4 text-slate-500">June 1, 2025</td>
            <td className="px-6 py-4">
              <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
                Paid
              </span>
            </td>
          </tr>

          <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
            <td className="px-6 py-4 font-medium text-slate-800">
              Maria Santos
            </td>
            <td className="px-6 py-4 text-slate-500">Room 102</td>
            <td className="px-6 py-4 text-slate-800">₱4,000</td>
            <td className="px-6 py-4 text-slate-500">June 3, 2025</td>
            <td className="px-6 py-4">
              <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
                Paid
              </span>
            </td>
          </tr>

          <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
            <td className="px-6 py-4 font-medium text-slate-800">
              Pedro Reyes
            </td>
            <td className="px-6 py-4 text-slate-500">Room 103</td>
            <td className="px-6 py-4 text-slate-800">₱3,500</td>
            <td className="px-6 py-4 text-slate-500">—</td>
            <td className="px-6 py-4">
              <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-red-50 text-red-500 ring-1 ring-red-200">
                Unpaid
              </span>
            </td>
          </tr>

          <tr className="hover:bg-slate-50 transition-colors">
            <td className="px-6 py-4 font-medium text-slate-800">
              Ana Gonzales
            </td>
            <td className="px-6 py-4 text-slate-500">Room 104</td>
            <td className="px-6 py-4 text-slate-800">₱3,500</td>
            <td className="px-6 py-4 text-slate-500">June 5, 2025</td>
            <td className="px-6 py-4">
              <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
                Paid
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default PaymentHistoryTable;
