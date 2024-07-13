import React from "react";
import { FaTimes } from "react-icons/fa";

const CreateRoomModal = ({ onClose, createRoomData, onChange, onAction }) => {
  return (
    <div
      className={`fixed font-poppins flex items-center justify-center w-screen h-screen inset-0 bg-black bg-opacity-50 transform transition-transform popup-visible z-50`}
    >
      <div className="bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 p-6 relative z-10">
        <div className="flex justify-between items-center">
          <p className="font-bold">Create Room</p>
          <button
            type="button"
            className="border-0 bg-transparent focus:outline-none"
            onClick={onClose}
          >
            <FaTimes />
          </button>
        </div>
        <div className="mt-5">
          <div className="flex justify-center items-center">
            <div className="rounded-xl overflow-hidden w-32 h-24">
              <img
                src={
                  createRoomData.picture ||
                  "https://www.hdwallpapers.in/download/cell_biology_background_hd_wallpaper_cellular-HD.jpg"
                }
                alt="title"
                className="h-full w-full object-cover cursor-pointer"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 my-5 gap-4">
            <div className="text-md">
              <label className="font-semibold">Picture</label>
              <div className="flex justify-between items-center mt-4 rounded-xl bg-gray-300">
                <input
                  className="block w-full bg-transparent border-0 text-sm py-3 px-3 focus:outline-none focus:ring-0 focus:border-transparent"
                  type="text"
                  placeholder="Input your room picture..."
                  name="picture"
                  onChange={(e) => onChange("picture", e.target.value)}
                  value={createRoomData.picture}
                  required
                />
              </div>
            </div>
            <div className="text-md">
              <label className="font-semibold">Room Number</label>
              <div className="flex justify-between items-center mt-4 rounded-xl bg-gray-300">
                <input
                  className="block w-full bg-transparent border-0 text-sm py-3 px-3 focus:outline-none focus:ring-0 focus:border-transparent"
                  type="number"
                  placeholder="Input your room number..."
                  name="roomNumber"
                  onChange={(e) => onChange("roomNumber", e.target.value)}
                  value={createRoomData.roomNumber}
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 my-5 gap-4">
            
            <div className="text-md">
              <label className="font-semibold">Price Per Night ($) </label>
              <div className="flex justify-between items-center mt-4 rounded-xl bg-gray-300">
                <input
                  className="block w-full bg-transparent border-0 text-sm py-3 px-3 focus:outline-none focus:ring-0 focus:border-transparent"
                  type="number"
                  placeholder="Input price per night..."
                  name="pricePerNight"
                  onChange={(e) => onChange("pricePerNight", e.target.value)}
                  value={createRoomData.pricePerNight}
                  required
                />
              </div>
            </div>
            <div className="text-md">
              <label className="font-semibold">Size Area (m²) </label>
              <div className="flex justify-between items-center mt-4 rounded-xl bg-gray-300">
                <input
                  className="block w-full bg-transparent border-0 text-sm py-3 px-3 focus:outline-none focus:ring-0 focus:border-transparent"
                  type="number"
                  min={1}
                  placeholder="Input size area..."
                  name="pricePerNight"
                  onChange={(e) => onChange("sizeArea", e.target.value)}
                  value={createRoomData.sizeArea}
                  required
                />
              </div>
            </div>
            <div className="text-md">
              <label className="font-semibold">Availability</label>
              <div className="flex justify-between items-center mt-4 rounded-xl bg-gray-300">
                <input
                  className="block w-full bg-transparent border-0 text-sm py-3 px-3 focus:outline-none focus:ring-0 focus:border-transparent"
                  type="text"
                  placeholder="Input your new bed type..."
                  name="bedType"
                  onChange={(e) => onChange("availability", e.target.value)}
                  value={"availability"}
                  required
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 my-5">
            <div className="text-md">
              <label className="font-semibold">Beds</label>
              <div className="flex justify-between items-center mt-4 rounded-xl bg-gray-300">
                <input
                  className="block w-full bg-transparent border-0 text-sm py-3 px-3 focus:outline-none focus:ring-0 focus:border-transparent"
                  type="text"
                  placeholder="Input beds..."
                  name="bedType"
                  onChange={(e) => onChange("beds", e.target.value)}
                  value={"beds"}
                  required
                />
              </div>
            </div>
            <div className="text-md">
              <label className="font-semibold">Facilities</label>
              <div className="flex justify-between items-center mt-4 rounded-xl bg-gray-300">
                <input
                  className="block w-full bg-transparent border-0 text-sm py-3 px-3 focus:outline-none focus:ring-0 focus:border-transparent"
                  type="text"
                  placeholder="Input facilities..."
                  name="bedType"
                  onChange={(e) => onChange("facilities", e.target.value)}
                  value={"facilities"}
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-center items-center space-x-4">
          <button
            onClick={onAction}
            className="transition-200 hover:scale-105 w-full font-bold shadow-sm rounded-lg py-4 text-white flex items-center justify-center transition-all duration-300 ease-in-out bg-indigo-600"
          >
            <span>Create</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateRoomModal;
