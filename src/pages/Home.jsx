import { useState } from "react";

import RoomCard from "../components/RoomCard";
import Filter from "../components/Filter";
import roomsData from "../data/rooms";
import Footer from "../components/Footer";

export default function Home() {
  const [filteredRooms, setFilteredRooms] = useState(roomsData);

  const handleFilter = ({ location, price }) => {
    let filtered = roomsData;

    if (location) {
      filtered = filtered.filter(room =>
        room.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (price) {
      filtered = filtered.filter(room => room.price <= price);
    }

    setFilteredRooms(filtered);
  };

  return (
    <div className="min-h-screen bg-white">
      

      <div className="p-4 md:p-6 space-y-6">

        {/* Filter */}
        <Filter onFilter={handleFilter} />

        {/* Rooms */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>


      </div>
      <Footer />
    </div>
  );
}