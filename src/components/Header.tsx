import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

type Side = {
  setShowSide: React.Dispatch<React.SetStateAction<boolean>>;
  showSide: boolean;
};

const UserHeader = ({ setShowSide }: Side) => {
  return (
    <div className="flex items-center  p-4  shadow-md h-[6rem] bg-[#3556AB]">
      <div
        className="lg:hidden p-2 cursor-pointer text-white"
        onClick={() => setShowSide((prev) => !prev)}
      >
        <GiHamburgerMenu size="24px" />
      </div>
      <h1 className="text-lg  md:ml-0 ml-[10px] font-bold text-white w-[80%]  text-center mx-auto">
        Edit Task
      </h1>
    </div>
  );
};

export default UserHeader;
