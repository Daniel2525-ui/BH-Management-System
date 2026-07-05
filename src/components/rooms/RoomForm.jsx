import React from "react";

function RoomForm({
  roomNumber,
  setRoomNumber,
  rent,
  setRent,
  errors,
  addRoom,
}) {
    
  return (
    <div>
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
    </div>
  );
}

export default RoomForm;
