import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router";
import { useAuthStore } from "../store/useAuthStore";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // ۱. ایجاد Draft State برای اطلاعات ورود
  const [draft, setDraft] = useState({
    email: "",
    password: "",
  });

  // ۲. دریافت توابع مورد نیاز از استور (با استفاده از Selector)
  const signIn = useAuthStore((state) => state.signIn);
  const currentUser = useAuthStore((state) => state.currentUser);

  // تابع مدیریت تغییرات اینپوت‌ها
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDraft((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();

    // ۳. اعتبار سنجی اولیه (Validation)
    if (!draft.email || !draft.password) {
      alert("لطفاً همه فیلدها را پر کنید");
      return;
    }

    // ۴. تلاش برای ورود از طریق استور
    const isSuccess = signIn(draft.email, draft.password);

    if (isSuccess) {
      alert("خوش آمدید!");
      navigate("/home"); // هدایت به صفحه اصلی بعد از ورود موفق
    } else {
      alert("ایمیل یا پسورد اشتباه است.");
    }
  };

  return (
    <main className="min-h-screen bg-bg-dark flex items-center justify-center px-4">
      <div className="w-full max-w-[320px]">
        {/* Title */}
        <h1 className="text-text-primary text-[28px] font-semibold mb-2">
          Sign In
        </h1>

        {/* Description */}
        <p className="text-text-secondary text-sm mb-6">
          Please enter email and password to access.
        </p>
        <form onSubmit={handleSignIn}>
          {/* Email */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-text-primary text-sm font-medium mb-2"
            >
              Email
            </label>

            <div className="relative">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-sm"
              />

              <input
                id="email"
                name="email"
                type="email"
                value={draft.email}
                onChange={handleChange}
                placeholder="Please enter your email"
                className="
                w-full
                h-[46px]
                rounded-md
                border
                border-border
                bg-input-bg
                pl-10
                pr-3
                text-sm
                text-text-primary
                placeholder:text-text-secondary
                outline-none
                focus:border-border-focus
                transition
              "
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-text-primary text-sm font-medium mb-2"
            >
              Password
            </label>

            <div className="relative">
              <FontAwesomeIcon
                icon={faLock}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-sm"
              />

              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={draft.password}
                onChange={handleChange}
                placeholder="Please enter your password"
                className="
                w-full
                h-[46px]
                rounded-md
                border
                border-border
                bg-input-bg
                pl-10
                pr-10
                text-sm
                text-text-primary
                placeholder:text-text-secondary
                outline-none
                focus:border-border-focus
                transition
              "
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="
                absolute
                right-3
                top-1/2
                -translate-y-1/2
                text-text-secondary
                hover:text-text-primary
                transition
              "
              >
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="text-sm"
                />
              </button>
            </div>
          </div>

          {/* Login */}
          <button
            type="submit"
            className="
            w-full
            h-[40px]
            rounded-md
            bg-button-primary
            text-text-primary
            text-sm
            font-medium
            hover:bg-button-hover
            transition
          "
          >
            Login
          </button>
        </form>

        {/* Sign Up */}
        <p className="text-center text-sm text-text-secondary mt-7">
          Don’t have an account?
          <Link to={"/signup"} className="text-link ml-1 hover:underline">
            Sign up
          </Link>
        </p>
      </div>

    </main>
  );
};;

export default SignIn;
