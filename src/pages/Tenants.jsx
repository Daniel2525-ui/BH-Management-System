import React from "react";
import { useState } from "react";
import TenantCard from "../components/tenants/TenantCard";
import PaymentForm from "../components/payments/PaymentForm";
import TenantForm from "../components/tenants/TenantForm";

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
      <TenantForm
        fullName={fullName}
        setFullName={setFullName}
        address={address}
        setAddress={setAddress}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        errors={errors}
        addTenant={addTenant}
      />

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
