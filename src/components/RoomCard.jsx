import { Heart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function RoomCard({ room }) {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="cursor-pointer group" onClick={() => navigate(`/room/${room.id}`)}>
      
      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={room.image}
          alt={room.title}
          className="w-full h-64 sm:h-56 md:h-60 lg:h-64 object-cover group-hover:scale-105 transition duration-300"
        />

        {/* Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setLiked(!liked);
          }}
          className="absolute top-3 right-3 bg-white/80 backdrop-blur p-2 rounded-full shadow"
        >
          <Heart
            size={18}
            className={
              liked ? "fill-rose-500 text-rose-500" : "text-gray-700"
            }
          />
        </button>
      </div>

      {/* Info */}
      <div className="mt-2 space-y-1">
        
        {/* Title + Rating */}
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-sm truncate">
            {room.title}
          </h3>
          <span className="text-sm">⭐ {room.rating}</span>
        </div>

        {/* Location */}
        <p className="text-gray-500 text-sm truncate">
          {room.location}
        </p>

        {/* Price */}
        <p className="text-sm">
          <span className="font-semibold">₩{room.price.toLocaleString()}</span> / Month
          
        </p>
        <p className="text-sm">
            <span className="font-semibold">₩{room.deposit.toLocaleString()}</span> Deposit

        </p>
      </div>
    </div>
  );
}