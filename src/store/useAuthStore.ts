import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  email: string;
  password: string;
  userName: string;
}

interface AuthState {
  users: User[];
  currentUser: User | null;

  signUp: (email: string, password: string, userName: string) => boolean;
  signIn: (email: string, password: string) => boolean;

  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      users: [],
      currentUser: null,

      // ۳. به‌روزرسانی منطق ثبت‌نام برای دریافت و ذخیره نام
      signUp: (email, password, userName) => {
        const { users } = get();

        // چک کردن تکراری نبودن ایمیل
        if (users.some((u) => u.email === email)) {
          return false;
        }

        // ذخیره کاربر جدید شامل نام، ایمیل و پسورد
        const newUser: User = { email, password, userName };
        set({ users: [...users, newUser], currentUser: newUser });
        return true;
      },

      signIn: (email, password) => {
        const { users } = get();
        const user = users.find(
          (u) => u.email === email && u.password === password,
        );

        if (user) {
          set({ currentUser: user });

          return true;
        }
        return false;
      },

      logout: () => set({ currentUser: null }),
    }),
    {
      name: "auth-storage",
    },
  ),
);
