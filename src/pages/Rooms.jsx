import React from "react";
import { useState } from "react";
import RoomCard from "./../components/rooms/RoomCard.jsx";
import RoomForm from "../components/rooms/RoomForm.jsx";

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
    if (tenantId !== "") {
      const alreadyAssigned = rooms.some(
        (room) => room.tenantId === tenantId && room.id !== roomId,
      );

      if (alreadyAssigned) {
        alert("This tenant is already assigned to another room");
        return;
      }
    }

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

      <RoomForm
        roomNumber={roomNumber}
        setRoomNumber={setRoomNumber}
        rent={rent}
        setRent={setRent}
        errors={errors}
        addRoom={addRoom}
      />

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
