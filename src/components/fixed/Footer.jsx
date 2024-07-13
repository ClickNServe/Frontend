import React from "react";

const Footer = () => {
  return (
    <footer className="py-2 border-t border-gray-200">
      <ul className="font-semibold text-md flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-8">
        <li>
          <span>
            ©<a href="#">HarmonyHotel</a> 2024, All rights reserved.
          </span>
        </li>
        <li>
          <a href="#">Reservation</a>
        </li>
        <li>
          <a href="#">Rooms</a>
        </li>
        <li>
          <a href="#">Facilities</a>
        </li>
        <li>
          <a href="#">Beds</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;