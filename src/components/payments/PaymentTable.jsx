import React from "react";
import PaymentRow from "./PaymentRow.jsx";

function PaymentTable({ payments, tenants, rooms }) {
  const getTenantName = (tenantId) => {
    const tenant = tenants.find((t) => t.id === tenantId);
    return tenant ? tenant.fullName : "Unknown Tenant";
  };

  const getRoomNumber = (roomId) => {
    const room = rooms.find((r) => r.id === roomId);
    return room ? room.roomNumber : "—";
  };

  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <h2 className="text-xs font-semibold uppercase tracking-widest">
          Monthly Payment Status
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
            {!payments.length ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-10 text-center text-sm text-slate-500"
                >
                  No payments recorded yet
                </td>
              </tr>
            ) : (
              payments.map((payment) => (
                <PaymentRow
                  key={payment.id}
                  tenant={getTenantName(payment.tenantId)}
                  room={getRoomNumber(payment.roomId)}
                  rent={`₱${payment.amount}`}
                  datePaid={payment.datePaid}
                  status={payment.status}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default PaymentTable;