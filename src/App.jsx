import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/fixed/Sidebar";
import Facility from "./pages/Facility";
import Bed from "./pages/Bed";
import Room from "./pages/Room";
import Footer from "./components/fixed/Footer";
import UpdateRoom from "./components/modal/update/UpdateRoom";
import CreateRoom from "./components/modal/create/CreateRoom";
import UpdateFacility from "./components/modal/update/UpdateFacility";
import CreateFacility from "./components/modal/create/CreateFacility";
import UpdateBed from "./components/modal/update/UpdateBedModal";
import CreateBed from "./components/modal/create/CreateBedModal";
import CreateReservation from "./components/modal/create/CreateReservation";

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
