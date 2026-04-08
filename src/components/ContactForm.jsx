import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ContactForm({ onClose, room }) {
  const [date, setDate] = useState(null);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-md p-4 sm:p-6 rounded-2xl space-y-4 relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500"
        >
          ✕
        </button>

        <h2 className="text-base sm:text-lg font-semibold">Contact Owner</h2>
        <p className="text-sm text-gray-500">Room: {room.title}</p>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-2 rounded-lg"
        />
        <input
          type="number"
          placeholder="Number of People staying"
          className="w-full border p-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full border p-2 rounded-lg"
        />

        <div>
          <h2 className="text-sm sm:text-base mb-1">Check-in Date</h2>
          <DatePicker
            selected={date}
            onChange={(newDate) => setDate(newDate)}
            placeholderText="Select Move-in Date"
            className="w-full border p-2 pl-10 rounded-lg focus:ring-2 focus:ring-rose-500"
            calendarClassName="rounded-lg shadow-lg p-2"
            minDate={new Date()}
          />
        </div>

        <textarea
          placeholder="Message"
          className="w-full border p-2 rounded-lg"
        ></textarea>

        <button
          className="w-full bg-rose-500 text-white py-2 rounded-xl hover:bg-rose-600 transition"
          onClick={() => {
            alert("Request Sent ✅");
            onClose();
          }}
        >
          Send Request
        </button>
      </div>
    </div>
  );
}