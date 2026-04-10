import { useState } from "react";

export default function Filter({ onFilter }) {
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [deposit, setDeposit] = useState("");

  const handleFilter = () => {
    onFilter({ location, price, deposit });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-6 bg-white rounded-2xl shadow-md">
      
      {/* Location */}
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full md:w-1/3 px-4 py-2 text-sm rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-1 focus:ring-rose-400 focus:outline-none transition"
      />

      {/* Price */}
      <input
        type="number"
        placeholder="Max Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full md:w-1/3 px-4 py-2 text-sm rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-1 focus:ring-rose-400 focus:outline-none transition"
      />

      {/* Deposit */}
      <input
        type="number"
        placeholder="Max Deposit"
        value={deposit}
        onChange={(e) => setDeposit(e.target.value)}
        className="w-full md:w-1/3 px-4 py-2 text-sm rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-1 focus:ring-rose-400 focus:outline-none transition"
      />

      {/* Button */}
      <button
        onClick={handleFilter}
        className="bg-rose-500 text-white px-6 py-2 rounded-xl text-sm font-medium hover:bg-rose-600 active:bg-rose-700 transition shadow-sm"
      >
        Apply
      </button>
    </div>
  );
}