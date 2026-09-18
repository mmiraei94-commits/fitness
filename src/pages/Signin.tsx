"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-[#020617] flex items-center justify-center px-4">
      <div className="w-full max-w-[320px]">
        {/* Title */}
        <h1 className="text-white text-[28px] font-semibold mb-2">Sign In</h1>

        {/* Description */}
        <p className="text-[#94a3b8] text-sm mb-6">
          Please enter email and password to access.
        </p>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-white text-sm font-medium mb-2">
            Email
          </label>

          <div className="relative">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8] text-sm"
            />

            <input
              type="email"
              placeholder="Please enter your email"
              className="
                w-full
                h-[46px]
                rounded-md
                border
                border-[#334155]
                bg-[#111827]
                pl-10
                pr-3
                text-sm
                text-white
                placeholder:text-[#94a3b8]
                outline-none
                focus:border-[#64748b]
                transition
              "
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-white text-sm font-medium mb-2">
            Password
          </label>

          <div className="relative">
            <FontAwesomeIcon
              icon={faLock}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8] text-sm"
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Please enter your password"
              className="
                w-full
                h-[46px]
                rounded-md
                border
                border-[#334155]
                bg-[#111827]
                pl-10
                pr-10
                text-sm
                text-white
                placeholder:text-[#94a3b8]
                outline-none
                focus:border-[#64748b]
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
                text-[#94a3b8]
                hover:text-white
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
          type="button"
          className="
            w-full
            h-[40px]
            rounded-md
            bg-[#09ad43]
            text-white
            text-sm
            font-medium
            hover:bg-[#08a33f]
            transition
          "
        >
          Login
        </button>

        {/* Sign Up */}
        <p className="text-center text-sm text-[#94a3b8] mt-7">
          Don’t have an account?{" "}
          <a href="#" className="text-[#00c853] ml-1 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </main>
  );
};

export default SignIn;
