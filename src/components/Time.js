"use client";

import { forwardRef } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { ClockIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useCalendarStore } from "@/store/useCalendarStore";

// eslint-disable-next-line react/display-name
const Time = forwardRef((_props, ref) => {
  const { time, setTime } = useCalendarStore();
  const times = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const timeString = `${String(hour).padStart(2, "0")}.${String(
        minute
      ).padStart(2, "0")}`;
      times.push(timeString);
    }
  }

  return (
    <Listbox ref={ref} value={time} onChange={setTime}>
      <div className="relative py-1">
        <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-1 pr-10 text-left text-gray-900 shadow-sm hover:bg-gray-200 sm:text-sm sm:leading-6">
          <span className={`flex items-center ${time ? "text-blue-600" : ""}`}>
            <span className="ml-1">
              <ClockIcon className="w-4 h-4" />
            </span>
            <span className="ml-2 block truncate text-sm">
              {time ? time : "Time"}
            </span>
          </span>
          {time ? (
            <span
              className="cursor-pointer absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
              onClick={() => setTime(null)}
            >
              <XMarkIcon aria-hidden="true" className="h-4 w-4 text-gray-400" />
            </span>
          ) : (
            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 text-gray-400"
              />
            </span>
          )}
        </ListboxButton>

        <ListboxOptions
          transition
          className="select-scroll absolute z-10 inset-x-0 top-0 mt-[-210px] max-h-52 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {times.map((time) => (
            <ListboxOption
              key={time}
              value={time}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-gray-200"
            >
              <div className="flex items-center">
                <span className="text-xs ml-3 block truncate font-normal group-data-[selected]:text-indigo-600">
                  {time}
                </span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-4 w-4" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
});

export default Time;
