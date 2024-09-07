"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import Calendar from "@/components/Calendar";
import Time from "@/components/Time";
import Repeat from "@/components/Repeat";
import RepeatEnds from "@/components/RepeatEnds";
import { useRef } from "react";
import { useCalendarStore } from "@/store/useCalendarStore";
import TaskInput from "@/components/TaskInput";
import AddTask from "@/components/AddTask";
import TaskList from "@/components/TaskList";

export default function Home() {
  const { repeat, clearValues } = useCalendarStore();
  const myRef = useRef(null);

  return (
    <main className="py-10 px-2 gap-2">
      <div className="min-h-10 flex gap-2 flex-col justify-center sm:flex-row">
        <div className="flex justify-center gap-2">
          <TaskInput />
          <Menu as="div" className="relative inline-block text-left mt-2">
            <MenuButton className="flex items-center">
              <CalendarDaysIcon className="w-6 h-6" />
            </MenuButton>
            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-4 px-2">
                <MenuItem>
                  <Calendar ref={myRef} />
                </MenuItem>
                <MenuItem>
                  <Time ref={myRef} />
                </MenuItem>
                <MenuItem>
                  <Repeat ref={myRef} />
                </MenuItem>
                {repeat && (
                  <MenuItem>
                    <RepeatEnds ref={myRef} />
                  </MenuItem>
                )}
                <MenuItem>
                  <div className="flex gap-2 justify-between mt-2">
                    <button
                      className="text-sm py-1.5 bg border w-1/2 rounded-md hover:bg-black hover:text-white"
                      onClick={clearValues}
                    >
                      Clear
                    </button>
                    <button className="text-sm py-1.5 bg border w-1/2 rounded-md hover:bg-black hover:text-white">
                      Select
                    </button>
                  </div>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
        <div className="flex justify-center">
          <AddTask />
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <TaskList />
      </div>
    </main>
  );
}
