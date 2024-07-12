import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { content } from "../../services/ContentList";
import { activeLink, nonActiveLink } from "../../services/Helper";

const Sidebar = () => {

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      <div>
          <div className="flex justify-between items-center">
            <Link
              to={`/`}
              onClick={() => {}}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-bold tracking-tight text-slate-900"
            >
              HarmonyHotel
            </Link>
          </div>
          <div className="mt-8">
            {content.map((item) => (
              <div className="text-gray-400 m-3 mt-4 uppercase" key={item.id}>
                <NavLink
                  to={`/${item.id}`}
                  className={({ isActive }) =>
                    isActive ? activeLink : nonActiveLink
                  }
                >
                  {item.icon}
                  <span className="capitalize">{item.name}</span>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default Sidebar;
