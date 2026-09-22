import { create } from "zustand";
import { persist } from "zustand/middleware";

type TGoal = "lose weight" | "maintain weight" | "gain muscle";

// ۱. تعریفِ ساختارِ دیتای هر کاربر (بدون متدها)
interface IUserData {
  age: number | null;
  weight: number | null;
  height: number | null;
  goal: TGoal;
  dailyCalorieIntake: number;
  dailyCaloriesBurn: number;
}

// ۲. تعریفِ ساختارِ کلی استور
interface IUserStore {
  // این نقشه (Map) تمام کاربران را نگه می‌دارد
  userProfiles: Record<string, IUserData>;

  // متدهایِ آپدیت که حالا نیاز به email دارند
  setAge: (email: string, age: number | null) => void;
  setWeight: (email: string, weight: number | null) => void;
  setHeight: (email: string, height: number | null) => void;
  setGoal: (email: string, goal: TGoal) => void;
  setDailyCalorieIntake: (email: string, calories: number) => void;
  setDailyCaloriesBurn: (email: string, calories: number) => void;

  // متد کمکی برای آپدیت کلی (بسیار کاربردی)
  updateUserData: (email: string, newData: Partial<IUserData>) => void;
}

const defaultUserData: IUserData = {
  age: null,
  weight: null,
  height: null,
  goal: "maintain weight",
  dailyCalorieIntake: 0,
  dailyCaloriesBurn: 0,
};

export const useUserData = create<IUserStore>()(
  persist(
    (set) => ({
      userProfiles: {},

      // منطقِ کمکی برای پیدا کردن یا ایجادِ دیتای پیش‌فرض کاربر
      setAge: (email, age) =>
        set((state) => ({
          userProfiles: {
            ...state.userProfiles,
            [email]: { ...(state.userProfiles[email] || defaultUserData), age },
          },
        })),

      setWeight: (email, weight) =>
        set((state) => ({
          userProfiles: {
            ...state.userProfiles,
            [email]: {
              ...(state.userProfiles[email] || defaultUserData),
              weight,
            },
          },
        })),

      setHeight: (email, height) =>
        set((state) => ({
          userProfiles: {
            ...state.userProfiles,
            [email]: {
              ...(state.userProfiles[email] || defaultUserData),
              height,
            },
          },
        })),

      setGoal: (email, goal) =>
        set((state) => ({
          userProfiles: {
            ...state.userProfiles,
            [email]: {
              ...(state.userProfiles[email] || defaultUserData),
              goal,
            },
          },
        })),

      setDailyCalorieIntake: (email, calories) =>
        set((state) => ({
          userProfiles: {
            ...state.userProfiles,
            [email]: {
              ...(state.userProfiles[email] || defaultUserData),
              dailyCalorieIntake: calories,
            },
          },
        })),

      setDailyCaloriesBurn: (email, calories) =>
        set((state) => ({
          userProfiles: {
            ...state.userProfiles,
            [email]: {
              ...(state.userProfiles[email] || defaultUserData),
              dailyCaloriesBurn: calories,
            },
          },
        })),

      // این متد اجازه می‌دهد به راحتی چندین فیلد را با هم آپدیت کنید
      updateUserData: (email, newData) =>
        set((state) => ({
          userProfiles: {
            ...state.userProfiles,
            [email]: {
              ...(state.userProfiles[email] || defaultUserData),
              ...newData,
            },
          },
        })),
    }),
    {
      name: "user-profile-data", // این نام در LocalStorage ثابت می‌ماند
    },
  ),
);

// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// type TGoal = "lose weight" | "maintain weight" | "gain muscle";

// interface IUseUserData {
//   age: number | null;
//   weight: number | null;
//   height: number | null;
//   goal: TGoal;
//   dailyCalorieIntake: number;
//   dailyCaloriesBurn: number;

//   setAge: (age: number | null) => void;
//   setWeight: (weight: number | null) => void;
//   setHeight: (height: number | null) => void;
//   setGoal: (goal: TGoal) => void;
//   setDailyCalorieIntake: (calories: number) => void;
//   setDailyCaloriesBurn: (calories: number) => void;

//   // برای پاک کردن دیتا هنگام خروج از حساب کاربری
//   resetUserData: () => void;
// }

// const initialState = {
//   age: null,
//   weight: null,
//   height: null,
//   goal: "maintain weight" as TGoal,
//   dailyCalorieIntake: 0,
//   dailyCaloriesBurn: 0,
// };

// export const useUserData = create<IUseUserData>()(
//   persist(
//     (set) => ({
//       ...initialState,

//       setAge: (age) => set({ age }),
//       setWeight: (weight) => set({ weight }),
//       setHeight: (height) => set({ height }),
//       setGoal: (goal) => set({ goal }),
//       setDailyCalorieIntake: (value) => set({ dailyCalorieIntake: value }),
//       setDailyCaloriesBurn: (value) => set({ dailyCaloriesBurn: value }),

//       resetUserData: () => set(initialState),
//     }),
//     {
//       name: "user-profile-data",
//     },
//   ),
// );
