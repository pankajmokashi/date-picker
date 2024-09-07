const { useCalendarStore } = require("@/store/useCalendarStore");

const weeks = ["S", "M", "T", "W", "T", "F", "S"];

export const DaysGrid = ({
  daysInMonth,
  firstDay,
  handleSelectDay,
  shouldHighlightDate,
  monthMapping,
}) => {
  const { selectedDate, selectedMonth, selectedYear, repeat, repeatEnd } =
    useCalendarStore();
  return (
    <div className="days grid gap-1 grid-cols-7 text-xs">
      {weeks.map((week, ind) => (
        <div
          key={ind}
          className="p-[10px] flex items-center justify-center text-gray-400"
        >
          {week}
        </div>
      ))}
      {Array.from({ length: firstDay }).map((_, i) => (
        <div key={i} className="day empty"></div>
      ))}
      {Array.from({ length: daysInMonth }).map((_, i) => {
        const day = i + 1;

        const isSelected =
          selectedDate.getDate() === day &&
          selectedDate.getMonth() === monthMapping[selectedMonth] &&
          selectedDate.getFullYear() === Number(selectedYear);

        const shouldHighlight = shouldHighlightDate(
          day,
          selectedDate,
          selectedYear,
          selectedMonth,
          repeat,
          repeatEnd
        );

        return (
          <div
            key={i}
            className={`p-[10px] flex items-center justify-center rounded-full cursor-pointer ${
              isSelected
                ? "selected bg-blue-500 text-white"
                : shouldHighlight
                ? "bg-blue-200 text-black"
                : "hover:bg-blue-200"
            }`}
            onClick={() => handleSelectDay(day)}
          >
            {day}
          </div>
        );
      })}
    </div>
  );
};
