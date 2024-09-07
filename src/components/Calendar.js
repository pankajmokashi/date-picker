"use client";

import { forwardRef, useState } from "react";
import { CalendarHeader } from "./CalendarHeader";
import { DaysGrid } from "./DaysGrid";
import { MonthsGrid } from "./MonthsGrid";
import { useCalendarStore } from "@/store/useCalendarStore";
import { format } from "date-fns";

const monthMapping = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

const shouldHighlightDate = (
  day,
  selectedDate,
  selectedYear,
  selectedMonth,
  repeat,
  repeatEnd
) => {
  const monthIndex = monthMapping[selectedMonth];
  const isAfterSelectedDate =
    new Date(selectedYear, monthIndex, day) > selectedDate;

  // Daily Repeat Logic
  if (repeat === "Daily" && repeatEnd === "Endless" && isAfterSelectedDate) {
    return true;
  }

  // Weekly Repeat Logic
  if (
    repeat === "Weekly" &&
    repeatEnd === "Endless" &&
    new Date(selectedYear, monthIndex, day).getDay() ===
      selectedDate.getDay() &&
    isAfterSelectedDate
  ) {
    return true;
  }

  // Monthly Repeat Logic
  if (
    repeat === "Monthly" &&
    repeatEnd === "Endless" &&
    day === selectedDate.getDate() &&
    isAfterSelectedDate
  ) {
    return true;
  }

  // Yearly Repeat Logic
  if (
    repeat === "Yearly" &&
    repeatEnd === "Endless" &&
    day === selectedDate.getDate() &&
    monthIndex === selectedDate.getMonth() &&
    isAfterSelectedDate
  ) {
    return true;
  }

  return false;
};

// eslint-disable-next-line react/display-name
const Calendar = forwardRef((_props, ref) => {
  const {
    selectedMonth,
    selectedYear,
    setSelectedDate,
    setSelectedMonth,
    setSelectedYear,
  } = useCalendarStore();
  const [showMonths, setShowMonths] = useState(false);
  const reversedMonthMapping = Object.keys(monthMapping);

  const monthIndex = monthMapping[selectedMonth];
  const daysInMonth = new Date(selectedYear, monthIndex + 1, 0).getDate();
  const firstDay = new Date(selectedYear, monthIndex, 1).getDay();

  const handlePrevMonth = () => {
    const newDate = new Date(selectedYear, monthIndex - 1, 1);
    setSelectedYear(format(newDate, "yyyy"));
    setSelectedMonth(format(newDate, "MMM"));
  };

  const handleNextMonth = () => {
    const newDate = new Date(selectedYear, monthIndex + 1, 1);
    setSelectedYear(format(newDate, "yyyy"));
    setSelectedMonth(format(newDate, "MMM"));
  };

  const handleSelectDay = (day) => {
    const newSelectedDate = new Date(
      selectedYear,
      monthMapping[selectedMonth],
      day
    );
    setSelectedDate(newSelectedDate);
  };

  return (
    <div ref={ref} className="calendar bg-white pb-3 min-w-[280px]">
      <CalendarHeader
        showMonths={showMonths}
        setShowMonths={setShowMonths}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
      />
      {showMonths ? (
        <MonthsGrid
          reversedMonthMapping={reversedMonthMapping}
          setShowMonths={setShowMonths}
        />
      ) : (
        <DaysGrid
          daysInMonth={daysInMonth}
          firstDay={firstDay}
          handleSelectDay={handleSelectDay}
          shouldHighlightDate={shouldHighlightDate}
          monthMapping={monthMapping}
        />
      )}
    </div>
  );
});

export default Calendar;
