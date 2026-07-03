import React from "react";

const statusStyles = {
  Paid: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200",
  Unpaid: "bg-red-50 text-red-500 ring-1 ring-red-200",
  Pending: "bg-amber-50 text-amber-600 ring-1 ring-amber-200",
};

function PaymentRow({ tenant, room, rent, datePaid, status }) {
  return (
    <tr className="border-b border-slate-50 last:border-b-0 hover:bg-slate-50 transition-colors">
      <td className="px-6 py-4 font-medium text-slate-800">{tenant}</td>
      <td className="px-6 py-4 text-slate-500">{room}</td>
      <td className="px-6 py-4 text-slate-800">{rent}</td>
      <td className="px-6 py-4 text-slate-500">{datePaid}</td>
      <td className="px-6 py-4">
        <span
          className={`px-2.5 py-1 text-xs font-medium rounded-full ${statusStyles[status]}`}
        >
          {status}
        </span>
      </td>
    </tr>
  );
}

export default PaymentRow;
