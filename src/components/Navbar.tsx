import React from "react";
import { IoIosArrowDropleft, IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="absolute border-b w-full h-10 flex justify-end items-center p-8">

      <div className="flex">
        <div className="flex relative items-center">
          <input className="border rounded-lg focus:outline-none px-4 py-2 border-slate-300 placeholder:text-slate-300 placeholder:text-lg" type="text" placeholder="Search..." />
            <div className="absolute cursor-pointer text-2xl text-slate-300 right-2">
                <AiOutlineSearch />
            </div>
        </div>
        <div className="text-slate-300 cursor-pointer flex justify-center items-center px-4 text-2xl">
          <IoMdNotificationsOutline />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
