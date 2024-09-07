"use client";

import { useCalendarStore } from "@/store/useCalendarStore";
import TextareaAutosize from "react-textarea-autosize";

export default function TaskInput() {
  const { task, setTask } = useCalendarStore();

  return (
    <TextareaAutosize
      placeholder="+ Add Task"
      minRows={1}
      maxRows={6}
      className="w-full sm:w-[480px] outline-none text-sm border p-2 my-auto select-scroll rounded"
      value={task}
      onChange={(e) => setTask(e.target.value)}
    />
  );
}
