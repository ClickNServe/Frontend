import React from "react";
import NavigationBar from "./components/admin/NavigationBar";
import Home from "./pages/admin/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="w-screen bg-blue-100 font-poppins overflow-hidden">
      <NavigationBar />
      <div className="px-12">
        <Routes>
          <Route path="/admin" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
