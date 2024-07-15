import React from "react";
import { FaTimes } from "react-icons/fa";
import Select from "react-select";


const UpdateRoomModal = ({
  data,
  onClose,
  updateRoomData,
  onChange,
  onAction,
  bedOption,
  facilityOption,
}) => {
  console.log(bedOption);
  console.log(facilityOption);
  return (
    <div
      className={`fixed font-poppins flex items-center justify-center w-screen h-screen inset-0 bg-black bg-opacity-50 transform transition-transform popup-visible z-50`}
    >
      <div className="bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 p-6 relative z-10">
        <div className="flex justify-between items-center">
          <p className="font-bold">Update Room</p>
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
                  updateRoomData.picture ||
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
                  className="input-placeholder block w-full bg-transparent border-0 text-sm py-3 px-3 focus:outline-none focus:ring-0 focus:border-transparent"
                  type="text"
                  placeholder="Input your room picture..."
                  name="picture"
                  onChange={(e) => onChange("picture", e.target.value)}
                  value={updateRoomData.picture}
                  required
                />
              </div>
            </div>
            <div className="text-md">
              <label className="font-semibold">Room Number</label>
              <div className="flex justify-between items-center mt-4 rounded-xl bg-gray-300">
                <input
                  className="input-placeholder block w-full bg-transparent border-0 text-sm py-3 px-3 focus:outline-none focus:ring-0 focus:border-transparent"
                  type="number"
                  placeholder={`Current : ${data.roomnumber}`}
                  name="roomnumber"
                  onChange={(e) => onChange("roomnumber", e.target.value)}
                  value={updateRoomData.roomnumber}
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 my-5 gap-4">
            <div className="text-md">
              <label className="font-semibold">Price Per Night ($) </label>
              <div className="flex justify-between items-center mt-4 rounded-xl bg-gray-300">
                <input
                  className="input-placeholder block w-full bg-transparent border-0 text-sm py-3 px-3 focus:outline-none focus:ring-0 focus:border-transparent"
                  type="number"
                  placeholder={`Current : $${data.pricepernight}`}
                  name="pricepernight"
                  onChange={(e) => onChange("pricepernight", e.target.value)}
                  value={updateRoomData.pricepernight}
                  required
                />
              </div>
            </div>
            <div className="text-md">
              <label className="font-semibold">Size Area (m²) </label>
              <div className="flex justify-between items-center mt-4 rounded-xl bg-gray-300">
                <input
                  className="input-placeholder block w-full bg-transparent border-0 text-sm py-3 px-3 focus:outline-none focus:ring-0 focus:border-transparent"
                  type="number"
                  min={1}
                  placeholder={`Current : ${data.sizearea}m²`}
                  name="sizearea"
                  onChange={(e) => onChange("sizearea", e.target.value)}
                  value={updateRoomData.sizearea}
                  required
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 my-5">
            <div className="text-md">
              <label className="font-semibold">Beds</label>
              <div className="flex justify-between items-center mt-4 rounded-xl bg-gray-300">
                <Select
                  required
                  className="input-placeholder block w-full bg-transparent border-0 text-sm py-3 px-3 focus:outline-none focus:ring-0 focus:border-transparent"
                  isMulti={true}
                  options={bedOption.map((bed) => ({
                    value: bed.id,
                    label: bed.bedtype,
                  }))}
                  onChange={(selected) =>
                    onChange(
                      "bedId",
                      selected ? selected.map((option) => option.value) : []
                    )
                  }
                />
              </div>
            </div>
            <div className="text-md">
              <label className="font-semibold">Facilities</label>
              <div className="flex justify-between items-center mt-4 rounded-xl bg-gray-300">
                <Select
                  required
                  className="input-placeholder block w-full bg-transparent border-0 text-sm py-3 px-3 focus:outline-none focus:ring-0 focus:border-transparent"
                  isMulti={true}
                  options={facilityOption.map((facility) => ({
                    value: facility.id,
                    label: facility.facilityname,
                  }))}
                  onChange={(selected) =>
                    onChange(
                      "facilityId",
                      selected ? selected.map((option) => option.value) : []
                    )
                  }
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
            <span>Update</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateRoomModal;
