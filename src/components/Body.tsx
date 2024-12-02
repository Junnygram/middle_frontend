import React from 'react';

const Body = () => {
  return (
    <div className="h-[80vh] flex px-2 flex-col justify-between">
      <div className="flex-grow">
        <h1 className="mt-2">Task Name</h1>
        <div className="mt-2">
          <input
            className="w-[90%] outline-none h-[3rem] pl-4 rounded-md"
            placeholder="add task"
          />
        </div>
      </div>

      <div className="flex gap-4 px-2 text-white">
        <button className="bg-[#AB3535] px-4 py-2 rounded-md">Delete</button>
        <button className="bg-[#3556AB] w-full rounded-md">Save</button>
      </div>
    </div>
  );
};

export default Body;
