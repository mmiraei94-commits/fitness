import { create } from "zustand";
import { persist } from "zustand/middleware";

type TGoal = "lose weight" | "maintain weight" | "gain muscle";

interface IUseUserData {
  age: number | null;
  weight: number | null;
  height: number | null;
  goal: TGoal;
  email: string | null;
  password: string | null;
  dailyCalorieIntake: number;
  dailyCaloriesBurn: number;

  setAge: (age: number | null) => void;
  setWeight: (weight: number | null) => void;
  setHeight: (height: number | null) => void;
  setEmail: (email: string | null) => void;
  setPassword: (password: string | null) => void;
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
      email:"",
      password:"",      
      goal: "maintain weight",
      dailyCalorieIntake: 0,
      dailyCaloriesBurn: 0,

      setAge: (age) => set({ age }),
      setWeight: (weight) => set({ weight }),
      setHeight: (height) => set({ height }),
      setEmail: (email) => set({ email }),
      setPassword: (password) => set({ password}),
      setGoal: (goal) => set({ goal }),
      setDailyCalorieIntake: (value) => set({ dailyCalorieIntake: value }),
      setDailyCaloriesBurn: (value) => set({ dailyCaloriesBurn: value }),
    }),
    {
      name: "user-data",
    },
  ),
);
