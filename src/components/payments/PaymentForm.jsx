import React from "react";
import { useState } from "react";

function PaymentForm({ tenants, rooms, setPayments }) {
  const [selectedTenantId, setSelectedTenantId] = useState("");
  const [datePaid, setDatePaid] = useState("");
  const [errors, setErrors] = useState({});

  {
    /* Find room by its id to identify which room was the selected Tenant's Name */
  }
  const assignedRoom = rooms.find((room) => room.tenantId === selectedTenantId);

  const recordPayment = () => {
    const newErrors = {};

    if (!selectedTenantId) {
      newErrors.tenant = "Please select a tenant";
    } else if (!assignedRoom) {
      newErrors.tenant = "This tenant has no assigned room";
    } else if (!datePaid) {
      newErrors.datePaid = "Please enter date";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newPayment = {
      id: crypto.randomUUID(),
      tenantId: selectedTenantId,
      roomId: assignedRoom.id,
      amount: assignedRoom.rent,
      datePaid,
      status: "Paid",
    };

    setPayments((prevPayments) => [...prevPayments, newPayment]);

    setSelectedTenantId("");
    setDatePaid("");
    setErrors({});
  };

  return (
    <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <h2 className="text-xs font-semibold uppercase tracking-widest mb-5">
        Record Payment
      </h2>

      <div className="grid gap-4 md:grid-cols-4">
        {/* Tenant */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium">Tenant</label>
          <select
            value={selectedTenantId}
            onChange={(e) => setSelectedTenantId(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- No Tenant Selected --</option>
            {tenants.map(({ id, fullName }) => (
              <option key={id} value={id}>
                {fullName}
              </option>
            ))}
          </select>

          {errors.tenant && (
            <p className="text-red-500 text-xs">{errors.tenant}</p>
          )}
        </div>

        {/* Assigned Room */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium">Assigned Room</label>
          <div className="w-full bg-slate-100 border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-500">
            {assignedRoom ? assignedRoom.roomNumber : "-- No Room --"}
          </div>
        </div>

        {/* Monthly Rent */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium">Monthly Rent</label>
          <div className="w-full bg-slate-100 border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-500">
            {assignedRoom ? `₱${assignedRoom.rent}` : "₱0"}
          </div>
        </div>

        {/* Date Paid */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium">Date Paid</label>
          <input
            type="date"
            value={datePaid}
            onChange={(e) => setDatePaid(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {errors.datePaid && (
            <p className="text-red-500 text-xs">{errors.datePaid}</p>
          )}
        </div>
      </div>

      <button
        onClick={recordPayment}
        className="mt-5 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium cursor-pointer shadow-sm"
      >
        Record Payment
      </button>
    </section>
  );
}

export default PaymentForm;
