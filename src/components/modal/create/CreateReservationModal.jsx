import React from "react";
import { FaTimes } from "react-icons/fa";

const CreateReservationModal = ({
  data,
  onClose,
  createReservationData,
  onChange,
  onAction,
}) => {
  return (
    <div
      className={`fixed font-poppins flex items-center justify-center w-screen h-screen inset-0 bg-black bg-opacity-50 transform transition-transform popup-visible z-50`}
    >
      <div className="bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 p-6 relative z-10">
        <div className="flex justify-between items-center">
          <p className="font-bold">
            Create Reservation ({data.roomNumber} - ${data.pricePerNight}/night){" "}
          </p>
          <button
            type="button"
            className="border-0 bg-transparent focus:outline-none"
            onClick={onClose}
          >
            <FaTimes />
          </button>
        </div>
        <div className="mt-5">
          <div className="my-5 grid  gap-4 grid-cols-2">
            <div className="text-md">
              <label className="font-semibold">Customer Name : </label>
              <div className="flex justify-between items-center mt-4 rounded-xl bg-gray-300">
                <input
                  className="input-placeholder block w-full bg-transparent border-0 text-sm py-3 px-3 focus:outline-none focus:ring-0 focus:border-transparent"
                  type="text"
                  placeholder="Input customer name..."
                  name="facilityName"
                  onChange={(e) => onChange("name", e.target.value)}
                  value={createReservationData.name}
                  required
                />
              </div>
            </div>
            <div className="text-md">
              <label className="font-semibold">Contact : </label>
              <div className="flex justify-between items-center mt-4 rounded-xl bg-gray-300">
                <input
                  className="input-placeholder block w-full bg-transparent border-0 text-sm py-3 px-3 focus:outline-none focus:ring-0 focus:border-transparent"
                  type="text"
                  placeholder="Input customer contact..."
                  min={1}
                  name="price"
                  onChange={(e) => onChange("contact", e.target.value)}
                  value={createReservationData.contact}
                  required
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 my-5">
            <div className="text-md">
              <label className="font-semibold">Check In : </label>
              <div className="flex justify-between items-center mt-4 rounded-xl bg-gray-300">
                <input
                  className="input-placeholder block w-full bg-transparent border-0 text-sm py-3 px-3 focus:outline-none focus:ring-0 focus:border-transparent"
                  type="datetime-local"
                  placeholder="Input customer contact..."
                  min={1}
                  name="price"
                  onChange={(e) => onChange("checkIn", e.target.value)}
                  value={createReservationData.checkIn}
                  required
                />
              </div>
            </div>
            <div className="text-md">
              <label className="font-semibold">Check Out : </label>
              <div className="flex justify-between items-center mt-4 rounded-xl bg-gray-300">
                <input
                  className="input-placeholder block w-full bg-transparent border-0 text-sm py-3 px-3 focus:outline-none focus:ring-0 focus:border-transparent"
                  type="datetime-local"
                  placeholder="Input customer contact..."
                  min={1}
                  name="price"
                  onChange={(e) => onChange("checkOut", e.target.value)}
                  value={createReservationData.checkOut}
                  required
                />
              </div>
            </div>
          </div>
          <div className="text-md my-5">
            <label className="font-semibold">Charge : </label>
            <div className="flex justify-between items-center mt-4 rounded-xl bg-gray-300">
              <input
                className="input-placeholder block w-full bg-transparent border-0 text-sm py-3 px-3 focus:outline-none focus:ring-0 focus:border-transparent"
                type="number"
                placeholder="Input charge..."
                min={1}
                name="price"
                onChange={(e) => onChange("charge", e.target.value)}
                value={createReservationData.charge}
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
            <span>Reserve</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateReservationModal;
