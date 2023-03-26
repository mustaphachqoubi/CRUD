import { BiBookmark } from "react-icons/bi";
import { TbSchool } from "react-icons/tb";
import { MdOutlinePayments } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";

export const list = [
    {
      id: 1,
      icon:<AiOutlineHome />,
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