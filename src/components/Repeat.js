"use client";

import { forwardRef } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useCalendarStore } from "@/store/useCalendarStore";

// eslint-disable-next-line react/display-name
const Repeat = forwardRef((_props, ref) => {
  const { repeat, setRepeat } = useCalendarStore();
  const repeatoptions = ["Daily", "Weekly", "Monthly", "Yearly", "Custom"];

  return (
    <Listbox ref={ref} value={repeat} onChange={setRepeat}>
      <div className="relative py-1">
        <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-1 pr-10 text-left text-gray-900 shadow-sm hover:bg-gray-200 sm:text-sm sm:leading-6">
          <span
            className={`flex items-center ${repeat ? "text-blue-600" : ""}`}
          >
            <span className="ml-1">
              <ArrowPathIcon className="w-4 h-4" />
            </span>
            <span className="ml-3 block truncate text-sm">
              {repeat ? repeat : "Repeat"}
            </span>
          </span>
          {repeat ? (
            <span
              className="cursor-pointer absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
              onClick={() => setRepeat(null)}
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
          className="select-scroll absolute z-10 inset-x-0 top-0 mt-[-170px] max-h-52 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {repeatoptions.map((repeat) => (
            <ListboxOption
              disabled={repeat == "Custom"}
              key={repeat}
              value={repeat}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-gray-200 data-[disabled]:bg-gray-300"
            >
              <div className="flex items-center">
                <span className="text-xs ml-3 block truncate font-normal group-data-[selected]:text-indigo-600">
                  {repeat}
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

export default Repeat;
