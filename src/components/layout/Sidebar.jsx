import React from "react";
import {
  LayoutDashboard,
  DoorOpen,
  Users,
  UserPlus,
  CreditCard,
  FileText,
  Settings,
} from "lucide-react";
import NavItem from "./NavItem.jsx";

function Sidebar() {
  const navItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      path: "/",
      icon: <LayoutDashboard size={18} />,
    },
    {
      id: "rooms",
      label: "Rooms",
      path: "/rooms",
      icon: <DoorOpen size={18} />,
    },
    {
      id: "tenants",
      label: "Tenants",
      path: "/tenants",
      icon: <Users size={18} />,
    },
    {
      id: "payments",
      label: "Payments",
      path: "/payments",
      icon: <CreditCard size={18} />,
    },
    {
      id: "reports",
      label: "Reports",
      path: "/reports",
      icon: <FileText size={18} />,
    },
    {
      id: "settings",
      label: "Settings",
      path: "/settings",
      icon: <Settings size={18} />,
    },
  ];

  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <div className="px-5 py-6 border-b border-white/10">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
          Management System
        </p>
        <h1 className="text-lg font-bold text-white tracking-tight">
          Boarding House
        </h1>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 flex flex-col gap-1.5 overflow-y-auto">
        {navItems.map(({ id, icon, label, path }) => (
          <NavItem
            key={id}
            icon={icon}
            label={label}
            path={path}
          />
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
