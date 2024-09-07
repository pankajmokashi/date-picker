import React from "react";
import { useCalendarStore } from "@/store/useCalendarStore";
import { format } from "date-fns";

function TaskList() {
  const { taskList } = useCalendarStore();

  if (taskList.length == 0) {
    return <div>No Tasks Added</div>;
  }

  const handleDate = (currentDate) => {
    const year = currentDate.getFullYear(); // Extracts the year (e.g., 2024)
    const month = format(currentDate, "MMM"); // Extracts the month (0-11, so add 1 to get 1-12)
    const date = currentDate.getDate();
    return `${month} ${date}, ${year}`;
  };

  return (
    <div className="w-full max-w-4xl">
      {taskList.map((task, ind) => (
        <div key={ind} className="w-full p-2 border mb-4">
            <div className="text-sm mb-1">Task - {task.task}</div>
          <div className="flex gap-2 justify-end text-xs text-blue-400">
            <div>
              <span className="text-black">
                {task.repeat ? "From Date - " : "Date - "}
              </span>
              {handleDate(task.selectedDate)}
            </div>
            {task.time && (
              <div>
                <span className="text-black">Time - </span>
                {task.time}
              </div>
            )}
            {task.repeat && <div>{task.repeat}</div>}
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default TaskList;
