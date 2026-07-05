import React from "react";

function TenantForm({
  fullName,
  setFullName,
  address,
  setAddress,
  phoneNumber,
  setPhoneNumber,
  errors,
  addTenant,
}) {
  return (
    <div>
      <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-xs font-semibold uppercase tracking-widest mb-5">
          Add Tenant
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Full Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium">Full Name</label>

            <input
              type="text"
              placeholder="e.g. Juan Dela Cruz"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            {errors.fullName && (
              <p className="text-red-500 text-xs">{errors.fullName}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium">Phone Number</label>

            <input
              type="text"
              placeholder="e.g. 09123456789"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            {errors.phoneNumber && (
              <p className="text-red-500 text-xs">{errors.phoneNumber}</p>
            )}
          </div>
        </div>

        {/* Address */}
        <div className="mt-4 flex flex-col gap-1.5">
          <label className="text-xs font-medium">Address</label>

          <textarea
            rows="3"
            placeholder="e.g. Butuan City"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm resize-none"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          {errors.address && (
            <p className="text-red-500 text-xs">{errors.address}</p>
          )}
        </div>

        <button
          onClick={addTenant}
          className="mt-5 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium cursor-pointer"
        >
          Add Tenant
        </button>
      </section>
    </div>
  );
}

export default TenantForm;
