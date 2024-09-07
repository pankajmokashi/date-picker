"use client";

import { useCalendarStore } from "@/store/useCalendarStore";

export default function AddTask() {
  const { task, addTask } = useCalendarStore();

  const handleClick = () => {
    if (task) {
      addTask();
    }
  };

  return (
    <button
      className={`text-sm mt-1 px-4 h-8 rounded ${
        task ? "bg-black text-white" : "bg-gray-300 text-black"
      }`}
      onClick={handleClick}
      disabled={task ? false : true}
    >
      Add Task
    </button>
  );
}
