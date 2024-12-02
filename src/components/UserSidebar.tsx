import { VscChromeClose } from 'react-icons/vsc';
import React from 'react';
import MenuItem from './MenuItem';
import UserBanner from './UserBanner';

type Side = {
  setShowSide: React.Dispatch<React.SetStateAction<boolean>>;
  showSide: boolean;
};

const UserSidebar = ({ setShowSide, showSide }: Side) => {
  return (
    <div
      className={`fixed top-0 left-0 bg-[#f3f3f3] dark:bg-black h-full z-20 shadow-xl transition-transform duration-300 ease-in-out
        ${
          showSide
            ? 'translate-x-0 w-[60%] md:w-[30%]'
            : '-translate-x-full w-0'
        }
        lg:translate-x-0 lg:w-[24%]`}
    >
      {/* Sidebar Content */}
      <div className=" px-1">
        <div
          className={`flex items-center p-4 h-[6rem]  flex-row-reverse shadow-md bg-[#3556AB] ${
            showSide || 'hidden lg:flex'
          }`}
        >
          <div
            className="lg:hidden p-2 cursor-pointer text-white"
            onClick={() => setShowSide((prev) => !prev)}
          >
            <VscChromeClose size="24px" />
          </div>

          <UserBanner src={'/assets/user.png'} username={'JHon'} />
        </div>

        <div
          className={`flex flex-col items-center gap-10 w-full 
            ${showSide ? 'pt-4 px-2' : 'hidden'}
            lg:flex lg:pt-4 lg:px-2 
          `}
        >
          <MenuItem />
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;
