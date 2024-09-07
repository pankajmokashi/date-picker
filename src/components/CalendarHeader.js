import { useCalendarStore } from "@/store/useCalendarStore";

const {
  ChevronLeftIcon,
  ChevronRightIcon,
} = require("@heroicons/react/24/solid");

export const CalendarHeader = ({
  showMonths,
  setShowMonths,
  handlePrevMonth,
  handleNextMonth,
}) => {
  const { selectedMonth, selectedYear, setSelectedYear } = useCalendarStore();
  return (
    <div className="header p-2 flex items-center justify-between">
      <div
        className="text-sm cursor-pointer"
        onClick={() => setShowMonths(true)}
      >
        {showMonths ? selectedYear : `${selectedMonth} ${selectedYear}`}
      </div>
      <div className="flex items-center gap-2">
        <div className="p-[2px] hover:bg-gray-200 rounded">
          <ChevronLeftIcon
            className="w-4 h-4 text-gray-400"
            onClick={
              showMonths
                ? () => setSelectedYear(Number(selectedYear) - 1)
                : handlePrevMonth
            }
          />
        </div>
        <div className="p-[2px] hover:bg-gray-200 rounded">
          <ChevronRightIcon
            className="w-4 h-4 text-gray-400"
            onClick={
              showMonths
                ? () => setSelectedYear(Number(selectedYear) + 1)
                : handleNextMonth
            }
          />
        </div>
      </div>
    </div>
  );
};
