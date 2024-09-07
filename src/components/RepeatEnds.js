"use client";

import { forwardRef } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useCalendarStore } from "@/store/useCalendarStore";
import { XMarkIcon } from "@heroicons/react/24/solid";

// eslint-disable-next-line react/display-name
const RepeatEnds = forwardRef((_props, ref) => {
  const { repeatEnd, setRepeatEnd } = useCalendarStore();

  return (
    <Listbox ref={ref} value={repeatEnd} onChange={setRepeatEnd}>
      <div className="relative py-1">
        <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-1 pr-10 text-left text-gray-900 shadow-sm hover:bg-gray-200 sm:text-sm sm:leading-6">
          <span
            className={`flex items-center ${repeatEnd ? "text-blue-600" : ""}`}
          >
            <span className="ml-1">
              <XCircleIcon className="w-4 h-4" />
            </span>
            <span className="ml-3 block truncate text-sm">{repeatEnd}</span>
          </span>
          {repeatEnd == "End By Date" ? (
            <span
              className="cursor-pointer absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
              onClick={() => {
                setTimeout(() => {
                  setRepeatEnd("Endless");
                }, 0);
              }}
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
          className="select-scroll absolute z-10 inset-x-0 top-0 mt-[-70px] max-h-52 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          <ListboxOption
            key="Endless"
            value="Endless"
            className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-gray-200 "
          >
            <div className="flex items-center">
              <span className="text-xs ml-3 block truncate font-normal group-data-[selected]:text-indigo-600">
                Endless
              </span>
            </div>

            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600  [.group:not([data-selected])_&]:hidden">
              <CheckIcon aria-hidden="true" className="h-4 w-4" />
            </span>
          </ListboxOption>
          <ListboxOption
            disabled
            key="End By Date"
            value="End By Date"
            className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-gray-200 data-[disabled]:bg-gray-300"
          >
            <div className="flex items-center">
              <span className="text-xs ml-3 block truncate font-normal group-data-[selected]:text-indigo-600">
                End By Date
              </span>
            </div>

            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600  [.group:not([data-selected])_&]:hidden">
              <CheckIcon aria-hidden="true" className="h-4 w-4" />
            </span>
          </ListboxOption>
        </ListboxOptions>
      </div>
    </Listbox>
  );
});

export default RepeatEnds;
