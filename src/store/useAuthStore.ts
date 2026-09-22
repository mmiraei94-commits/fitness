import { create } from "zustand";
import { persist } from "zustand/middleware";

// تعریف ساختار کاربر در دیتابیس موقت
interface User {
  email: string;
  password: string; // اضافه شد برای امکان احراز هویت
}

interface AuthState {
  users: User[]; // لیست تمام کاربرانی که ثبت‌نام کرده‌اند
  currentUser: User | null; // کاربری که الان لاگین کرده

  signUp: (email: string, password: string) => boolean;
  signIn: (email: string, password: string) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      users: [],
      currentUser: null,

      // ثبت‌نام کاربر جدید
      signUp: (email, password) => {
        const { users } = get();
        // چک کردن اینکه آیا این ایمیل قبلاً ثبت‌نام شده یا خیر
        if (users.some((u) => u.email === email)) {
          return false;
        }
        // اضافه کردن کاربر جدید با ایمیل و پسورد به لیست
        set({ users: [...users, { email, password }] });
        return true;
      },

      // ورود کاربر
      signIn: (email, password) => {
        const { users } = get();
        // پیدا کردن کاربری که هم ایمیل و هم پسوردش درست باشد
        const user = users.find(
          (u) => u.email === email && u.password === password,
        );

        if (user) {
          set({ currentUser: user });
          return true;
        }
        return false;
      },

      // خروج
      logout: () => set({ currentUser: null }),
    }),
    {
      name: "auth-storage",
    },
  ),
);
