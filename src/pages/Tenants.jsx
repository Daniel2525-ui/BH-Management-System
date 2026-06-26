import React from "react";
import { useState } from "react";
import TenantCard from "../components/tenants/TenantCard";

function Tenants({ tenants, setTenants }) {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState({});

  const addTenant = () => {
    const newErrors = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    }

    if (!address.trim()) {
      newErrors.address = "Address is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const phoneNumExists = tenants.some(
      (tenant) => tenant.phoneNumber === phoneNumber.trim(),
    );

    if (phoneNumExists) {
      setErrors({
        phoneNumber: "Phone number already exists",
      });
      return;
    }

    const newTenant = {
      id: crypto.randomUUID(),
      fullName: fullName.trim(),
      phoneNumber: phoneNumber.trim(),
      address: address.trim(),
    };

    setTenants((prevTenants) => [...prevTenants, newTenant]);

    setFullName("");
    setPhoneNumber("");
    setAddress("");
    setErrors({});
  };

  const deleteTenant = (id) => {
    setTenants((prevTenants) =>
      prevTenants.filter((tenant) => tenant.id !== id),
    );
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Tenants</h1>
        <p className="text-sm text-slate-400 mt-1">
          Manage tenant records and contact information.
        </p>
      </div>

      {/* Add Tenant Form */}
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

      {/* Tenant List */}
      <h2 className="text-xs font-semibold uppercase tracking-widest mb-4">
        Tenant List
      </h2>
      {!tenants.length ? (
        <p className="text-sm text-slate-600 text-center py-10">
          No tenants assigned yet
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {tenants.map((tenant) => (
            <TenantCard
              key={tenant.id}
              tenant={tenant}
              deleteTenant={deleteTenant}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Tenants;
