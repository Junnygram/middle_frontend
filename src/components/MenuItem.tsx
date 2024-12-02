import React from 'react';
import TaskList from './Task';
import GoProUpgrade from './Trophy';

const MenuItem = () => {
  return (
    <div className="space-y-7">
      {' '}
      <div className="w-full">
        <GoProUpgrade />
      </div>
      {/* TaskList Section */}
      <div className="mx-2">
        <TaskList />
      </div>
    </div>
  );
};

export default MenuItem;
