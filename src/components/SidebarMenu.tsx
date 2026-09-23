import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons/faHeartPulse";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";
import { useAuthStore } from "../store/useAuthStore";
import { useUserData } from "../store/useUserData";

const SidebarMenu = () => {
    const currentUserUserName = useAuthStore((state) => state.currentUser?.userName);

  return (
    <nav className="hidden fixed lg:flex flex-col w-64 bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800 p-6 transition-colors duration-200 min-h-screen">
      <div className="flex items-center gap-3 mb-8">
        <div className="size-10 rounded-xl bg-emerald-500 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-person-standing size-7 text-white"
            aria-hidden="true"
          >
            <circle cx="12" cy="5" r="1"></circle>
            <path d="m9 20 3-6 3 6"></path>
            <path d="m6 8 6 2 6-2"></path>
            <path d="M12 10v4"></path>
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
          FitTrack
        </h1>
      </div>
      <div className="flex flex-col gap-2">
        <NavLink
          to={"/home"}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2.5 border-l-3 transition-all duration-200 ${
              isActive
                ? "bg-emerald-50 dark:bg-emerald-900/10 text-emerald-600 dark:text-emerald-400 font-medium"
                : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200 border-transparent"
            }`
          }
        >
          <FontAwesomeIcon icon={faHome} />
          Home
        </NavLink>
        <NavLink
          to={"/food"}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2.5 border-l-3 transition-all duration-200 ${
              isActive
                ? "bg-emerald-50 dark:bg-emerald-900/10 text-emerald-600 dark:text-emerald-400 font-medium"
                : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200 border-transparent"
            }`
          }
        >
          <FontAwesomeIcon icon={faUtensils} />
          Food
        </NavLink>
        <NavLink
          to={"/activity"}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2.5 border-l-3 transition-all duration-200 ${
              isActive
                ? "bg-emerald-50 dark:bg-emerald-900/10 text-emerald-600 dark:text-emerald-400 font-medium"
                : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200 border-transparent"
            }`
          }
        >
          <FontAwesomeIcon icon={faHeartPulse} />
          Activity
        </NavLink>
        <NavLink
          to={"/profile"}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2.5 border-l-3 transition-all duration-200 ${
              isActive
                ? "bg-emerald-50 dark:bg-emerald-900/10 text-emerald-600 dark:text-emerald-400 font-medium"
                : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200 border-transparent"
            }`
          }
        >
          <FontAwesomeIcon icon={faUser} />
          Profile
        </NavLink>
        <div className="flex items-center gap-3 px-4 py-2.5 text-white font-bold ">
          <img className="bg-green-300 rounded-full size-9" src="public/Profile user.png" alt="" />
          <p>{currentUserUserName}</p>
        </div>
      </div>
    </nav>
  );
};

export default SidebarMenu;
