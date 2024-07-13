import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/fixed/Sidebar";
import Facility from "./pages/Facility";
import Bed from "./pages/Bed";
import Room from "./pages/Room";
import Footer from "./components/fixed/Footer";
import UpdateRoom from "./pages/update/UpdateRoom";
import CreateRoom from "./pages/create/CreateRoom";
import UpdateFacility from "./pages/update/UpdateFacility";
import CreateFacility from "./pages/create/CreateFacility";
import UpdateBed from "./pages/update/UpdateBed";
import CreateBed from "./pages/create/CreateBed";
import CreateReservation from "./pages/create/CreateReservation";

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
            <Route path="/create_reservation" element={<CreateReservation />} />
            {/* rooms */}
            <Route path="/rooms" element={<Room />} />
            <Route path="/rooms/:id" element={<UpdateRoom />} />
            <Route path="/create_room" element={<CreateRoom />} />
            {/* facilities */}
            <Route path="/facilities" element={<Facility />} />
            <Route path="/facilities/:id" element={<UpdateFacility />} />
            <Route path="/create_facility" element={<CreateFacility />} />
            {/* beds */}
            <Route path="/beds" element={<Bed />} />
            <Route path="/beds/:id" element={<UpdateBed />} />
            <Route path="/create_bed" element={<CreateBed />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
