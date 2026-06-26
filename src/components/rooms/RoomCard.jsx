import React from "react";
import { Trash2 } from "lucide-react";

function RoomCard({ room, deleteRoom, tenantName, tenants, assignTenant }) {
  const isAvailable = room.tenantId === null;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-sm hover:border-slate-300 transition-all duration-200">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold text-slate-800 text-sm">
          Room: {room.roomNumber}
        </h3>

        <span
          className={`px-2.5 py-1 text-xs font-medium rounded-full ring-1 ${
            isAvailable
              ? "bg-emerald-50 text-emerald-600 ring-emerald-200"
              : "bg-red-50 text-red-600 ring-red-200"
          }`}
        >
          {isAvailable ? "Available" : "Occupied"}
        </span>
      </div>

      <p className="text-xl font-bold text-slate-800">
        ₱{room.rent.toLocaleString()}
        <span className="text-xs font-normal text-slate-400 ml-1">
          {" "}
          / month
        </span>
      </p>

      <p className="mt-1 text-xs text-slate-400">
        {tenantName ?? "No tenant Assigned"}
      </p>

      <div className="flex gap-2 mt-5 pt-4 border-t border-slate-100">
        <select
          value={room.tenantId ?? ""}
          onChange={(e) => assignTenant(room.id, e.target.value)}
          className="px-3 py-1.5 rounded-lg text-xs border border-slate-200"
        >
          <option value="">-- Unassign Tenant --</option>

          {tenants.map((tenant) => (
            <option key={tenant.id} value={tenant.id}>
              {tenant.fullName}
            </option>
          ))}
        </select>

        <button
          onClick={() => deleteRoom(room.id)}
          title="Delete Room"
          className="ml-auto p-2 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
}

export default RoomCard;
