import React from "react";
import { useState } from "react";
import DashboardCards from "../components/dashboard/DashboardCards";

function Dashboard({ rooms, tenants, payments}) {
  return (
    <div>
      
      <DashboardCards rooms={rooms} tenants={tenants} payments={payments} />
    </div>
  );
}

export default Dashboard;
