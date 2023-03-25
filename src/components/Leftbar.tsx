import React, { useState } from "react";
import { AiOutlineHome, AiOutlineExport } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";
import { TbSchool } from "react-icons/tb";
import { MdOutlinePayments } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import LefbarList from "./LiftbarList";

const Leftbar = () => {
  const list = [
    {
      id: 1,
      icon: <AiOutlineHome />,
      name: "Home",
    },
    {
      id: 2,
      icon: <BiBookmark />,
      name: "Course",
    },
    {
      id: 3,
      icon: <TbSchool />,
      name: "Students",
    },
    {
      id: 4,
      icon: <MdOutlinePayments />,
      name: "Payment",
    },
    {
      id: 5,
      icon: <HiOutlineDocumentReport />,
      name: "Report",
    },
    {
      id: 6,
      icon: <FiSettings />,
      name: "Settings",
    },
  ];

  const [open, setOpen] = useState(true);
  const nav = document.getElementById("leftNav")!;
  const openNav = () => {
    nav.style.width = "500px";
  };
  const closeNav = () => {
    nav.style.width = "0";
  };
  return (
    <div id="leftNav" className="bg-[#F2EAE1] w-full h-full">
      <div className="flex w-full h-20"></div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="w-20 rounded-full overflow-hidden h-20 border-2 border-orange-500 ">
          <img
            src="https://www.mnp.ca/-/media/foundation/integrations/personnel/2020/12/16/13/57/personnel-image-4483.jpg?h=800&w=600&hash=9D5E5FCBEE00EB562DCD8AC8FDA8433D"
            alt="user"
          />
        </div>
        <h1 className="font-bold">Mustapha chqoubi</h1>
        <h3 className="text-xs text-orange-500">Admin</h3>
      </div>

      <div className="flex flex-col mt-10">
        {list.map((item) => (
          <LefbarList key={item.id} icon={item.icon} name={item.name} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 p-10 cursor-pointer">
        <h3 className="hover:underline">Logout</h3>
        <div>
          <AiOutlineExport />
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
