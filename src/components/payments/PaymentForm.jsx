import React from "react";

function PaymentForm() {
  const tenants = ["Juan Dela Cruz", "Maria Santos", "Pedro Reyes"];

  return (
    <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <h2 className="text-xs font-semibold uppercase tracking-widest mb-5">
        Record Payment
      </h2>

      <div className="grid gap-4 md:grid-cols-4">
        {/* Tenant */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium">Tenant</label>
          <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>-- No Tenant Selected --</option>

            {tenants.map((name) => (
              <option key={name}>{name}</option>
            ))}
          </select>
        </div>

        {/* Assigned Room (read-only, auto-filled later) */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium">Assigned Room</label>
          <div className="w-full bg-slate-100 border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-500">
            Room 101
          </div>
        </div>

        {/* Monthly Rent (read-only, auto-filled later) */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium">Monthly Rent</label>
          <div className="w-full bg-slate-100 border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-500">
            ₱3,500
          </div>
        </div>

        {/* Date Paid */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium">Date Paid</label>
          <input
            type="date"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <button className="mt-5 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium cursor-pointer shadow-sm">
        Record Payment
      </button>
    </section>
  );
}

export default PaymentForm;