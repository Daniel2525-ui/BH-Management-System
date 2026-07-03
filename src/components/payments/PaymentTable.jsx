import React from "react";
import PaymentRow from "./PaymentRow.jsx";

function PaymentTable({ payments, tenants, rooms }) {
  const getRoomForTenant = (tenantId) => {
    return rooms.find((room) => room.tenantId === tenantId);
  };

  const getPaymentForTenant = (tenantId) => {
    return payments.find((payment) => payment.tenantId === tenantId);
  };

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
            {!tenants.length ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-10 text-center text-sm text-slate-500"
                >
                  No tenants added yet
                </td>
              </tr>
            ) : (
              tenants.map((tenant) => {
                const room = getRoomForTenant(tenant.id);
                const payment = getPaymentForTenant(tenant.id);
                const isPaid = Boolean(payment);

                return (
                  <PaymentRow
                    key={tenant.id}
                    tenant={tenant.fullName}
                    room={room ? room.roomNumber : "— No Room —"}
                    rent={room ? `₱${room.rent}` : "₱0"}
                    datePaid={isPaid ? payment.datePaid : "-"}
                    status={isPaid ? "Paid" : "Unpaid"}
                  />
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default PaymentTable;