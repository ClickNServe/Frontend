import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import { content } from "../services/ContentList";

const Sidebar = () => {
  const activeMenu = true;
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2'
  const nonActiveLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-md m-2 hover:bg-light-gray'
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu ? (
        <div>
          <div className="flex justify-between items-center">
            <Link
              to={`/`}
              onClick={() => {}}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-bold tracking-tight text-slate-900"
            >
              HarmonyHotel
            </Link>
            <MdOutlineCancel
              className="cursor-pointer mt-4 block mr-3"
              onClick={() => {}}
            />
          </div>
          <div className="mt-10">
            {content.map((item) => (
                <div className="text-gray-400 m-3 mt-4 uppercase">
                    
                </div>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Sidebar;
