import React from "react";
import Leftbar from "../components/Leftbar";
import { open } from "../redux/closeNavbar";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import StudentsCard from "../components/Cards/StudentsCard";

const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <div className="">
      <div
        onClick={() => {
          dispatch(open());
        }}
        className="absolute flex justify-center items-center hover:bg-orange-600 bg-orange-500 text-white p-2 rounded-full text-center w-10 top-20 left-5 cursor-pointer"
      >
        -
      </div>
      <div className="">
        <Navbar />
      </div>

      <div className="">
        <Leftbar />
      </div>
    </div>
  );
};

export default Dashboard;
