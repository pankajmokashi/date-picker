const { useCalendarStore } = require("@/store/useCalendarStore");

export const MonthsGrid = ({ reversedMonthMapping, setShowMonths }) => {
  const { selectedMonth, setSelectedMonth } = useCalendarStore();
  return (
    <div className="months grid gap-2 grid-cols-4 text-xs">
      {reversedMonthMapping.map((month) => (
        <div
          key={month}
          className={`p-2 rounded flex items-center justify-center cursor-pointer ${
            selectedMonth === month ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => {
            setSelectedMonth(month);
            setShowMonths(false);
          }}
        >
          {month}
        </div>
      ))}
    </div>
  );
};
