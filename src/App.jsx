import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Rooms from "./pages/Rooms";
import Facilities from "./pages/Facilities";
import Beds from "./pages/Beds";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const App = () => {
  const activeMenu = true;
  return (
    <div>
      {activeMenu ? (
        <div className="w-72 fixed sidebar bg-white">
          <Sidebar />
        </div>
      ) : (
        <div className="w-0">
          <Sidebar />
        </div>
      )}
      <div className={`bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
        <div className="fixed md:static bg-main-bg navbar w-full">
          <Navbar />
        </div>
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={ <Rooms /> } />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/beds" element={<Beds />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
