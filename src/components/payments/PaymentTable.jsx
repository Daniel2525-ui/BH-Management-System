import React from "react";
import PaymentRow from "./PaymentRow.jsx";

const payments = [
  {
    id: 1,
    tenant: "Juan Dela Cruz",
    room: "Room 101",
    rent: "₱3,500",
    datePaid: "June 1, 2025",
    status: "Paid",
  },
  {
    id: 2,
    tenant: "Maria Santos",
    room: "Room 102",
    rent: "₱4,000",
    datePaid: "June 3, 2025",
    status: "Paid",
  },
  {
    id: 3,
    tenant: "Pedro Reyes",
    room: "Room 103",
    rent: "₱3,500",
    datePaid: "—",
    status: "Unpaid",
  },
  {
    id: 4,
    tenant: "Ana Gonzales",
    room: "Room 104",
    rent: "₱3,500",
    datePaid: "June 5, 2025",
    status: "Paid",
  },
  {
    id: 5,
    tenant: "Mark Villanueva",
    room: "Room 105",
    rent: "₱3,500",
    datePaid: "Awaiting confirmation",
    status: "Pending",
  },
];

function PaymentTable() {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <h2 className="text-xs font-semibold uppercase tracking-widest">
          Payment History
        </h2>
      </div>

      <div className="overflow-x-auto">
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
                Monthly Rent
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
            {payments.map((payment) => (
              <PaymentRow
                key={payment.id}
                tenant={payment.tenant}
                room={payment.room}
                rent={payment.rent}
                datePaid={payment.datePaid}
                status={payment.status}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default PaymentTable;