import React from 'react';
import Image from 'next/image';

interface IUser {
  src: string;
  username: string;
}

const UserBanner = ({ src, username }: IUser) => {
  return (
    <div className="flex items-center gap-4 text-white  rounded-lg">
      <div className="w-16 h-16 rounded-full overflow-hidden ">
        <Image
          src={src}
          alt={`${username}'s profile`}
          width={64}
          height={64}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col">
        <span className="text-lg font-bold ">Hello, {username}</span>
        <span className="text-sm ">What are your plans for today?</span>
      </div>
    </div>
  );
};

export default UserBanner;
