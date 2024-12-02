import Image from 'next/image';

const GoProUpgrade = () => {
  return (
    <div>
      <div className="flex w-[80%] mx-auto items-center justify-between bg-lime-400   rounded-lg shadow-md p-4  max-w-sm">
        <div className="flex items-center space-x-2">
          <Image
            src="/assets/trophy.png"
            alt="Trophy Icon"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span className="text-blue-900 font-semibold text-[10px] ">
            Go Pro Upgrade Now
          </span>
        </div>

        <div className="bg-blue-900 text-white px-4 py-1 rounded-lg text-sm font-semibold">
          $1
        </div>
      </div>{' '}
    </div>
  );
};

export default GoProUpgrade;
