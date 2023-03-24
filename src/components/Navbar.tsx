import React from "react";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="p-4 bg-red-500 flex justify-between  items-center bg-white text-slate-400">
      <div className="text-xl cursor-pointer hover:text-slate-500">
        <AiOutlineLeftCircle />
      </div>

      <div className="flex gap-4 items-center justify-center">
        <div>
          <input type="search" name="search" id="search" className="border border-slate-400 rounded-lg outline-none bg-transparent placeholder:px-5 placeholder:text-xs px-2 py-1 text-slate-400 text-sm font-light" placeholder="Search..."/>
        </div>
        <div className="text-xl cursor-pointer hover:text-slate-500">
          <IoIosNotificationsOutline />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
