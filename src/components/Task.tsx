import { useState, useEffect } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import toast, { Toaster } from 'react-hot-toast';

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          { id: 1, title: 'Burger BBQ with family', completed: false },
          { id: 2, title: 'Training at the Gym', completed: true },
        ];
  });
  const [newTaskTitle, setNewTaskTitle] = useState<string>('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const toggleTaskCompletion = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = () => {
    if (newTaskTitle.trim() === '') return;

    const newTask: Task = {
      id: Date.now(),
      title: newTaskTitle,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle('');

    // Show toast notification
    toast.success('Task added successfully!', {
      style: {
        background: '#4CAF50',
        color: 'white',
      },
      iconTheme: {
        primary: 'white',
        secondary: '#4CAF50',
      },
    });
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
    toast.success('Task deleted successfully!', {
      style: {
        background: '#f44336',
        color: 'white',
      },
      iconTheme: {
        primary: 'white',
        secondary: '#f44336',
      },
    });
  };

  return (
    <div className="space-y-4 mx-8 text-[10px] w-[14rem]">
      <Toaster position="top-right" />

      <div className="flex">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          className="w-full outline-none h-[2rem] pl-2 rounded-md border"
          placeholder="Add new task"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addTask();
            }
          }}
        />
        <button
          onClick={addTask}
          className="ml-2 bg-green-500 text-white px-2 rounded-md"
        >
          Add
        </button>
      </div>

      {/* Task list */}
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center p-4 border border-gray-400 rounded-lg shadow-sm hover:bg-gray-100"
        >
          <div
            className={`w-6 h-6 flex items-center justify-center rounded-full border-2 cursor-pointer ${
              task.completed
                ? 'bg-green-500 border-green-500'
                : 'bg-white border-gray-400'
            }`}
            onClick={() => toggleTaskCompletion(task.id)}
          >
            {task.completed && <span className="text-white text-sm">✔</span>}
          </div>
          <span
            className={`ml-2 flex-1 ${
              task.completed ? 'line-through text-gray-400' : 'text-gray-900'
            }`}
          >
            {task.title}
          </span>
          <div className="flex gap-2">
            <button
              className="text-blue-500 border border-blue-500 rounded-md px-2 py-1 hover:bg-blue-500 hover:text-white"
              onClick={() => {
                /* Edit functionality can be added here */
              }}
            >
              Edit
            </button>
            <button
              className="text-red-500 border border-red-500 rounded-md px-2 py-1 hover:bg-red-500 hover:text-white"
              onClick={() => deleteTask(task.id)}
            >
              <VscChromeClose size={10} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
