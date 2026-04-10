import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { supabase } from "./supabase"; // <-- make sure you have supabase.js set up

export default function ContactForm({ onClose, room }) {
  const [name, setName] = useState("");
  const [people, setPeople] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const { data, error } = await supabase
      .from("personal_details") // replace with your table name
      .insert([
        {
          name,
          people,
          phone,
          check_in_date: date, // Date object from DatePicker
          message,
          room_title: room.title, // optional: save which room it was
        },
      ]);

    if (error) {
      console.error(error);
      alert("Something went wrong ❌");
    } else {
      alert("Request Sent ✅");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-md p-6 rounded-2xl space-y-5 relative shadow-lg">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
        >
          ✕
        </button>

        {/* Header */}
        <h2 className="text-lg font-semibold text-gray-800">Contact Owner</h2>
        <p className="text-sm text-gray-500">Room: {room.title}</p>

        {/* Inputs */}
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded-lg text-sm focus:border-rose-400 focus:ring-1 focus:ring-rose-400 focus:outline-none transition"
        />
        <input
          type="number"
          placeholder="Number of People staying"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded-lg text-sm focus:border-rose-400 focus:ring-1 focus:ring-rose-400 focus:outline-none transition"
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded-lg text-sm focus:border-rose-400 focus:ring-1 focus:ring-rose-400 focus:outline-none transition"
        />

        {/* Date Picker */}
        <div>
          <h2 className="text-sm font-medium text-gray-700 mb-1">Check-in Date</h2>
          <DatePicker
            selected={date}
            onChange={(newDate) => setDate(newDate)}
            placeholderText="Select Move-in Date"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg text-sm focus:border-rose-400 focus:ring-1 focus:ring-rose-400 focus:outline-none transition"
            calendarClassName="rounded-lg shadow-lg p-2"
            minDate={new Date()}
          />
        </div>

        {/* Message */}
        <textarea
          placeholder="Message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded-lg text-sm focus:border-rose-400 focus:ring-1 focus:ring-rose-400 focus:outline-none transition resize-none"
        ></textarea>

        {/* Button */}
        <button
          className="w-full bg-rose-500 text-white py-2 rounded-xl text-sm font-medium hover:bg-rose-600 active:bg-rose-700 transition shadow-sm"
          onClick={handleSubmit}
        >
          Send Request
        </button>
      </div>
    </div>
  );
}