import React from 'react';
import { FaTimes } from 'react-icons/fa';
import trash from '../../../assets/trash.mp4';

const DeleteModal = ({ onClose, onDelete }) => {
  return (
    <div
      className={`fixed font-poppins flex items-center justify-center w-screen h-screen inset-0 bg-black bg-opacity-50 transform transition-transform popup-visible z-50`}
    >
      <div className="bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 h-7/12 p-6 relative z-10">
        <div className="flex justify-between items-center">
          <p></p>
          <button
            type="button"
            className="border-0 bg-transparent focus:outline-none"
            onClick={onClose}
          >
            <FaTimes />
          </button>
        </div>
        <div className="flex justify-center items-center mt-5">
          <div className="rounded-full overflow-hidden w-48 h-48">
            <video src={trash} autoPlay loop muted></video>
          </div>
        </div>
        <div className="font-bold text-2xl flex justify-center items-center">
          <h1>Are you sure?</h1>
        </div>
        <div className="font-semibold text-lg flex justify-center items-center">
          <h1>This action cannot be undone</h1>
        </div>
        <div className="mt-4 flex justify-center items-center space-x-4">
          <button
            onClick={onDelete}
            className="transition-200 hover:scale-105 w-full font-bold shadow-sm rounded-lg py-4 text-white flex items-center justify-center transition-all duration-300 ease-in-out bg-red-600"
          >
            <span>Yes, I'm sure</span>
          </button>
          <button
            onClick={onClose}
            className="transition-200 hover:scale-105 w-full font-bold shadow-sm rounded-lg py-4 text-black flex items-center justify-center transition-all duration-300 ease-in-out bg-gray-300"
          >
            <span>No</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
