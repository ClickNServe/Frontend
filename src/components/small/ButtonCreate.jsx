import React from "react";

const ButtonCreate = ({ message }) => {
  return (
    <button className="hover:scale-105 duration-200 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-2xl">
      Create {message}
    </button>
  );
};

export default ButtonCreate;
