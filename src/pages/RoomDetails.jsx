import { useParams } from "react-router-dom";
import rooms from "../data/rooms";

export default function RoomDetails() {
  const { id } = useParams();
  const room = rooms.find(r => r.id === parseInt(id));

  if (!room) return <p className="p-6">Room not found</p>;

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6">

      {/* HERO IMAGE */}
      <div className="relative w-full h-72 md:h-[420px] rounded-2xl overflow-hidden">

        {/* Blurred BG */}
        <img
          src={room.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-md scale-110"
        />

        {/* Main */}
        <img
          src={room.image}
          alt={room.title}
          className="relative w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Text */}
        <div className="absolute bottom-4 left-4 text-white">
          <h1 className="text-xl md:text-2xl font-semibold">
            {room.title}
          </h1>
          <p className="text-sm opacity-90">
            {room.location} · ⭐ {room.rating}
          </p>
        </div>
      </div>

      {/* 📸 IMAGE GALLERY */}
      {room.images && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {room.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="room"
              className="w-full h-32 md:h-40 object-cover rounded-xl hover:brightness-90 transition"
            />
          ))}
        </div>
      )}

      {/* CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* LEFT */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-lg font-semibold">
            About this place
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed">
            A comfortable and peaceful stay with all essential amenities.
            Perfect for short trips and long stays.
          </p>
        </div>

        {/* RIGHT (BOOKING CARD) */}
        <div className="border rounded-2xl p-5 shadow-sm space-y-4 h-fit bg-white">
            {room.already_booked && (
  <p className="text-red-500 text-sm font-semibold">
    🚫 Already Booked
  </p>
)}

          <p className="text-lg font-semibold">
            ₩ {room.price}
            <span className="text-sm font-normal"> / Month</span>
          </p>

          <p className="text-sm text-gray-500">
            Deposit · ₩{room.deposit.toLocaleString()}
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            Note: Additional fees for utilities, maintenance, and contract.
          </p>

          <p className="text-gray-600 text-sm">
            WhatsApp: +82 10-1234-5678
          </p>

          <button className="w-full bg-rose-500 text-white py-2 rounded-xl hover:bg-rose-600 transition">
            Reserve
          </button>

        </div>

      </div>
    </div>
  );
}