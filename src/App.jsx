import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/fixed/Sidebar";
import Facility from "./pages/Facility";
import Bed from "./pages/Bed";
import Room from "./pages/Room";
import Footer from "./components/fixed/Footer";

const App = () => {
  return (
    <div className="flex">
      <div className="w-72 fixed sidebar bg-white">
        <Sidebar />
      </div>
      <div className={`md:ml-72 bg-main-bg min-h-screen w-full`}>
        <div>
          <Routes>
            {/* reservation */}
            <Route path="/" element={<Home />} />
            {/* rooms */}
            <Route path="/rooms" element={<Room />} />
            {/* facilities */}
            <Route path="/facilities" element={<Facility />} />
            {/* beds */}
            <Route path="/beds" element={<Bed />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
