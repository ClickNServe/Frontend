import React from "react";
import { FaTimes } from "react-icons/fa";

const DetailReservationModal = ({ data, onClose }) => {
  return (
    <div
      className={`fixed font-poppins flex items-center justify-center w-screen h-screen inset-0 bg-black bg-opacity-50 transform transition-transform popup-visible z-50`}
    >
      <div className="bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 p-6 relative z-10">
        <div className="flex justify-between items-center">
          <p className="font-bold">Reservation Detail</p>
          <button
            type="button"
            className="border-0 bg-transparent focus:outline-none"
            onClick={onClose}
          >
            <FaTimes />
          </button>
        </div>
        <div className="mt-5">
          <div className="grid grid-cols-2">
            <div className="text-md flex">
              <h1 className="font-bold">
                Reservant : <span className="font-normal">{data.name}</span>
              </h1>
            </div>
            <div className="text-md flex">
              <h1 className="font-bold">
                Contact : <span className="font-normal">{data.contact}</span>
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-2 my-3">
            <div className="text-md flex">
              <h1 className="font-bold">
                Room Number :{" "}
                <span className="font-normal">{data.roomNumber}</span>
              </h1>
            </div>
            <div className="text-md flex">
              <h1 className="font-bold">
                Charge :{" "}
                <span className="font-normal">${data.charge}</span>
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-2 my-3">
            <div className="text-md flex">
              <h1 className="font-bold">
                Check In :{" "}
                <span className="font-normal">{data.checkIn}</span>
              </h1>
            </div>
            <div className="text-md flex">
              <h1 className="font-bold">
                Availability :{" "}
                <span className="font-normal">{data.checkOut}</span>
              </h1>
            </div>
          </div>
          <div className="text-md my-4 flex">
            <h1 className="font-bold">
              Order Time : <span className="font-normal">{data.orderTime}</span>
            </h1>
          </div>
        </div>
        <div className="mt-4 flex justify-center items-center space-x-4">
          <button
            onClick={onClose}
            className="transition-200 hover:scale-105 w-full font-bold shadow-sm rounded-lg py-4 text-white flex items-center justify-center transition-all duration-300 ease-in-out bg-blue-600"
          >
            <span>Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailReservationModal;
