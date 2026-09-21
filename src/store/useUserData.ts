import { create } from "zustand";
import { persist } from "zustand/middleware";

type TGoal = "lose weight" | "maintain weight" | "gain muscle";

interface IUseUserData {
  age: number | null;
  weight: number | null;
  height: number | null;
  goal: TGoal;
  dailyCalorieIntake: number;
  dailyCaloriesBurn: number;

  setAge: (age: number | null) => void;
  setWeight: (weight: number | null) => void;
  setHeight: (height: number | null) => void;
  setGoal: (goal: TGoal) => void;
  setDailyCalorieIntake: (calories: number) => void;
  setDailyCaloriesBurn: (calories: number) => void;
}

export const useUserData = create<IUseUserData>()(
  persist(
    (set) => ({
      age: null,
      weight: null,
      height: null,
      goal: "maintain weight",
      dailyCalorieIntake: 0,
      dailyCaloriesBurn: 0,

      setAge: (age) => set({ age }),
      setWeight: (weight) => set({ weight }),
      setHeight: (height) => set({ height }),
      setGoal: (goal) => set({ goal }),
      setDailyCalorieIntake: (value) => set({ dailyCalorieIntake: value }),
      setDailyCaloriesBurn: (value) => set({ dailyCaloriesBurn: value }),
    }),
    {
      name: "user-data",
    },
  ),
);
