import React, {useState} from "react";

interface NavList {
  icon: any;
  name: string;
}

const LiftbarList = ({ name, icon }: NavList) => {
    const [isSelected, setIsSelected] = useState(false)
  return (
    <div className="flex gap-2 flex-col px-6 py-2 ">
      <div
      onClick={() => setIsSelected(true)}
        className={` ${
          isSelected ? "bg-[#FEAF00]" : null
        } hover:bg-[#F6C762] flex gap-3 justify-center items-center p-2 rounded-lg cursor-pointer`}
      >
        <div >{icon}</div>
        <div className=" flex w-16 justify-start">{name}</div>
      </div>
    </div>
  );
};

export default LiftbarList;
