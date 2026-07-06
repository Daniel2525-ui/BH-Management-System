import React from "react";
import { Trash2 } from "lucide-react";

function TenantCard({ tenant, deleteTenant }) {
  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5">
      <h3 className="font-semibold text-slate-800">{tenant.fullName}</h3>

      <p className="text-sm text-slate-500 mt-2">{tenant.phoneNumber}</p>

      <p className="text-sm text-slate-500 mt-1">{tenant.address}</p>

      <div className="flex gap-2 mt-5 pt-4 border-t border-slate-100">
        <button className="px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-600 text-white">
          Edit
        </button>

        <button
          onClick={() => deleteTenant(tenant.id)}
          title="Delete Tenant"
          className="p-2 rounded-lg hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </section>
  );
}

export default TenantCard;
