import React from "react";
import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";
import Navbar from "./components/Navbar";

// ✅ import these
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* ✅ keep this consistent */}
        <Route path="/room/:id" element={<RoomDetails />} />
      </Routes>
    </Router>
  );
};

export default App;