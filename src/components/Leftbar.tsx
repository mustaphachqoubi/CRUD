import React from "react";
import { HiOutlineLogout } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { TbSchool } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { close, open } from "../redux/closeNavbar";
import { useDispatch, useSelector } from "react-redux";

const Leftbar = () => {
  const {close_nav} = useSelector(state => state.closer);
  const dispatch = useDispatch();
  return (
    <div
      className={`${close_nav} bg-orange-100 w-60 h-screen flex-col justify-between p-6 relative`}
    >
      <div
      onClick={() => {
        dispatch(close())
      }}
      className="absolute flex justify-center items-center md:hidden hover:bg-orange-600 bg-orange-500 text-white p-2 rounded-full text-center w-10 top-5 right-5 cursor-pointer">
        x
      </div>
      <div className="space-y-8">
        <div className="flex font-bold gap-2 cursor-pointer">
          <div className="bg-orange-300 w-1" />
          <h1 className="hidden md:flex text-sm md:text-[1em]">
            CRUD OPERATIONS
          </h1>
          <h1 className="flex md:hidden text-md md:text-[1em]">CRUD</h1>
        </div>

        <div className="flex flex-col justify-center items-center gap-2 cursor-pointer">
          <div className="rounded-full w-20 h-20 rounded-full overflow-hidden">
            <img
              src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="admin"
              className="object-cover"
            />
          </div>
          <h3 className="font-bold text-sm">Mustapha</h3>
          <h4 className="text-orange-400 text-xs">Admin</h4>
        </div>

        <div className="flex flex-col gap-4 relative">
          <div className="flex cursor-pointer justify-center items-center gap-4 text-black p-2 rounded-md bg-orange-400">
            <div className="text-lg md:flex absolute left-5">
              <AiOutlineHome />
            </div>
            <h3>Home</h3>
          </div>
          <div className="flex cursor-pointer justify-center items-center gap-4 text-black p-2 rounded-md hover:bg-orange-200">
            <div className="text-lg md:flex absolute left-5">
              <BsBookmark />
            </div>
            <h3>Course</h3>
          </div>
          <div className="flex cursor-pointer justify-center items-center gap-4 text-black p-2 rounded-md hover:bg-orange-200">
            <div className="text-lg md:flex absolute left-5">
              <TbSchool />
            </div>
            <h3>Students</h3>
          </div>
          <div className="flex cursor-pointer justify-center items-center gap-4 text-black p-2 rounded-md hover:bg-orange-200">
            <div className="text-lg md:flex absolute left-5">
              <MdOutlinePayment />
            </div>
            <h3>Payment</h3>
          </div>
          <div className="flex cursor-pointer justify-center items-center gap-4 text-black p-2 rounded-md hover:bg-orange-200">
            <div className="text-lg md:flex absolute left-5">
              <HiOutlineDocumentReport />
            </div>
            <h3>Report</h3>
          </div>
          <div className="flex cursor-pointer justify-center items-center gap-4 text-black p-2 rounded-md hover:bg-orange-200">
            <div className="text-lg md:flex absolute left-5">
              <FiSettings />
            </div>
            <h3>Settings</h3>
          </div>
        </div>
      </div>

      <div className="flex gap-4 items-center justify-center cursor-pointer hover:underline">
        <h3 className="">Logout</h3>
        <div>
          <HiOutlineLogout />
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
