import { create } from "zustand";
import { format } from "date-fns";

export const useCalendarStore = create((set) => ({
  task: "",
  selectedDate: new Date(),
  endDate: null,
  selectedMonth: format(new Date(), "MMM"), // Default to current month
  selectedYear: format(new Date(), "yyyy"),
  time: null,
  repeat: null,
  repeatEnd: "Endless",
  taskList: [], // Array to store tasks

  // Setters for individual states
  setTask: (task) => set(() => ({ task })),
  setSelectedDate: (date) => set(() => ({ selectedDate: date })),
  setEndDate: (date) => set(() => ({ endDate: date })),
  setSelectedMonth: (month) => set(() => ({ selectedMonth: month })),
  setSelectedYear: (year) => set(() => ({ selectedYear: year })),
  setTime: (time) => set(() => ({ time })),
  setRepeat: (repeat) => set(() => ({ repeat })),
  setRepeatEnd: (repeatEnd) => set(() => ({ repeatEnd })),

  // Function to add task to taskList
  addTask: () =>
    set((state) => {
      const newTask = {
        task: state.task,
        selectedDate: state.selectedDate,
        endDate: state.endDate,
        selectedMonth: state.selectedMonth,
        selectedYear: state.selectedYear,
        time: state.time,
        repeat: state.repeat,
        repeatEnd: state.repeatEnd,
      };
      return {
        taskList: [...state.taskList, newTask],
        // Reset all input fields after adding the task
        task: "",
        selectedDate: new Date(),
        endDate: null,
        selectedMonth: format(new Date(), "MMM"),
        selectedYear: format(new Date(), "yyyy"),
        time: null,
        repeat: null,
        repeatEnd: "Endless",
      };
    }),

  // Clear all input values without adding a task
  clearValues: () =>
    set(() => ({
      task: "",
      selectedDate: new Date(),
      endDate: null,
      selectedMonth: format(new Date(), "MMM"),
      selectedYear: format(new Date(), "yyyy"),
      time: null,
      repeat: null,
      repeatEnd: "Endless",
    })),
}));
