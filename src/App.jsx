import React from "react";
import { useState } from "react";
import Sidebar from "./components/layout/Sidebar.jsx";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Rooms from "./pages/Rooms";
import Tenants from "./pages/Tenants";
import Payments from "./pages/Payments";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  const [rooms, setRooms] = useState([]);
  const [tenants, setTenants] = useState([]);

  return (
    <div className="flex">
      <Sidebar />

      <section className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/rooms"
            element={
              <Rooms
                rooms={rooms}
                setRooms={setRooms}
                tenants={tenants}
                setTenants={setTenants}
              />
            }
          />
          <Route
            path="/tenants"
            element={
              <Tenants
                tenants={tenants}
                setTenants={setTenants}
                rooms={rooms}
                setRooms={setRooms}
              />
            }
          />
          <Route path="/payments" element={<Payments />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
