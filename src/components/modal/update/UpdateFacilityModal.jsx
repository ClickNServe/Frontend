import React from "react";
import { FaTimes } from "react-icons/fa";

const UpdateFacilityModal = ({
  data,
  onClose,
  updateFacilityData,
  onChange,
  onAction,
}) => {
  return (
    <div
      className={`fixed font-poppins flex items-center justify-center w-screen h-screen inset-0 bg-black bg-opacity-50 transform transition-transform popup-visible z-50`}
    >
      <div className="bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 p-6 relative z-10">
        <div className="flex justify-between items-center">
          <p className="font-bold">Update Facility</p>
          <button
            type="button"
            className="border-0 bg-transparent focus:outline-none"
            onClick={onClose}
          >
            <FaTimes />
          </button>
        </div>
        <div className="mt-5">
          <div className="text-md my-5">
            <label className="font-semibold">New Facility Name</label>
            <div className="flex justify-between items-center mt-4 rounded-xl bg-gray-300">
              <input
                className="block w-full bg-transparent border-0 text-sm py-3 px-3 focus:outline-none focus:ring-0 focus:border-transparent"
                type="text"
                placeholder={`Current : ${data.facilityName}`}
                name="facilityName"
                onChange={(e) => onChange("facilityName", e.target.value)}
                value={updateFacilityData.facilityName}
                required
              />
            </div>
          </div>
          <div className="text-md my-5">
            <label className="font-semibold">New Price ($) </label>
            <div className="flex justify-between items-center mt-4 rounded-xl bg-gray-300">
              <input
                className="block w-full bg-transparent border-0 text-sm py-3 px-3 focus:outline-none focus:ring-0 focus:border-transparent"
                type="number"
                placeholder={`Current : $${data.price}`}
                min={1}
                name="price"
                onChange={(e) => onChange("price", e.target.value)}
                value={updateFacilityData.price}
                required
              />
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

export default UpdateFacilityModal;
