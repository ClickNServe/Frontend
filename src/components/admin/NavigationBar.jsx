import React, { useState } from "react";
import { adminContent } from "../../services/ContentList";
import { Link } from "react-router-dom";
import close from "../../assets/close.svg";
import menu from "../../assets/menu.svg";

const NavigationBar = () => {
  const [active, setActive] = useState("/admin");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-white w-full px-12 flex py-6 justify-between items-center navbar">
      <div className="flex-1 flex-start">
        <h1 className="font-semibold cursor-pointer text-[18px]">
          Harmony Hotel
        </h1>
      </div>

      <ul className="list-none hidden justify-end items-center flex-1 lg:flex">
        {adminContent.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-medium cursor-pointer text-[16px] ${
              active === nav.title ? "text-indigo-600" : "text-black"
            } ${index === adminContent.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <Link to={`/${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className="lg:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient popup-visible absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {adminContent.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium mb-4 cursor-pointer text-[16px] ${
                  active === nav.title ? "text-indigo-600" : "text-black"
                }`}
                onClick={() => setActive(nav.title)}
              >
                <Link to={`/${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
            <li
              className={`font-poppins font-medium mb-0 cursor-pointer text-[16px] ${
                active === "signout" ? "text-indigo-600" : "text-black"
              }`}
              onClick={() => {
                setActive("signout");
              }}
            >
              Sign Out
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
