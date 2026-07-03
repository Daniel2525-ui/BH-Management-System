import React from "react";
import { useState } from "react";
import RoomCard from "./../components/rooms/RoomCard.jsx";

function Rooms({ rooms, setRooms, tenants }) {
  const [roomNumber, setRoomNumber] = useState("");
  const [rent, setRent] = useState("");
  const [errors, setErrors] = useState({});

  const addRoom = () => {
    const newErrors = {};

    if (!roomNumber.trim()) {
      newErrors.roomNumber = "Room number is required";
    }

    if (!rent.trim()) {
      newErrors.rent = "Monthly rent is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const roomExists = rooms.some(
      (room) =>
        room.roomNumber.toLowerCase() === roomNumber.trim().toLowerCase(),
    );

    if (roomExists) {
      setErrors({
        roomNumber: "Room number already exists",
      });
      return;
    }

    const newRoom = {
      id: crypto.randomUUID(),
      roomNumber: roomNumber.trim(),
      rent: Number(rent),
      tenantId: null,
    };

    setRooms((prevRooms) => [...prevRooms, newRoom]);

    setRoomNumber("");
    setRent("");
    setErrors({});
  };

  const deleteRoom = (id) => {
    if (!confirm("Delete Room?")) return;

    setRooms((prevRooms) => prevRooms.filter((room) => room.id !== id));
  };

  const assignTenant = (roomId, tenantId) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === roomId
          ? { ...room, tenantId: tenantId === "" ? null : tenantId }
          : room,
      ),
    );
  };
  
  const getTenantById = (tenantId) => {
    return tenants.find((tenant) => tenant.id === tenantId);
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Rooms</h1>
        <p className="text-sm text-slate-400 mt-1">
          Manage boarding house rooms and occupancy.
        </p>
      </div>

      {/* Add Room Form */}
      <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-xs font-semibold uppercase tracking-widest mb-5">
          Add Room
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Room Number */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium">Room Number</label>

            <input
              type="text"
              placeholder="e.g. Room 101"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
            />

            {errors.roomNumber && (
              <p className="text-red-500 text-xs">{errors.roomNumber}</p>
            )}
          </div>

          {/* Monthly Rent */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium">Monthly Rent</label>

            <input
              type="number"
              placeholder="e.g. 3500"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={rent}
              onChange={(e) => setRent(e.target.value)}
            />

            {errors.rent && (
              <p className="text-red-500 text-xs">{errors.rent}</p>
            )}
          </div>
        </div>

        <button
          onClick={addRoom}
          className="mt-5 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium cursor-pointer shadow-sm"
        >
          Add Room
        </button>
      </section>

      {/* Room List */}
      {!rooms.length ? (
        <p className="text-sm text-slate-600 text-center py-10">
          No rooms added yet
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {rooms.map((room) => {
            const tenant = getTenantById(room.tenantId);

            return (
              <RoomCard
                key={room.id}
                room={room}
                tenantName={tenant?.fullName}
                deleteRoom={deleteRoom}
                tenants={tenants}
                setRooms={setRooms}
                assignTenant={assignTenant}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Rooms;
