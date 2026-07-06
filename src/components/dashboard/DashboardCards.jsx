import React from "react";
import { DoorOpen, Users, DoorClosed, Home, Wallet } from "lucide-react";

function DashboardCards({ rooms, tenants, payments, rent }) {
  const occupiedRooms = rooms.filter((room) => room.tenantId !== null);
  const vacantRooms = rooms.filter((room) => room.tenantId === null);
  const totalMonthlyIncome = rooms.reduce((sum, room) => sum + room.rent, 0);

  const stats = [
    {
      label: "Total Rooms",
      value: rooms.length,
      icon: DoorOpen,
      iconColor: "text-blue-500",
    },
    {
      label: "Total Tenants",
      value: tenants.length,
      icon: Users,
      iconColor: "text-violet-500",
    },
    {
      label: "Occupied Rooms",
      value: occupiedRooms.length,
      icon: DoorClosed,
      iconColor: "text-emerald-500",
    },
    {
      label: "Vacant Rooms",
      value: vacantRooms.length,
      icon: Home,
      iconColor: "text-amber-500",
    },
    {
      label: "Monthly Income",
      value: `₱${totalMonthlyIncome.toLocaleString()}`,
      icon: Wallet,
      iconColor: "text-rose-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
      {stats.map(({ label, value, icon: Icon, iconColor }) => (
        <div
          key={label}
          className="group relative flex flex-col justify-center gap-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
        >
          <div
            className={`absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 ${iconColor}`}
          >
            <Icon className="h-4.5 w-4.5" />
          </div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="truncate text-2xl font-bold text-slate-900 lg:text-3xl">
            {value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;
