import { faHeartPulse, faHome, faUser, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";

const BottomMenu = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 px-4 pb-safe lg:hidden transition-colors duration-200 ">
      <div className="max-w-lg mx-auto flex justify-around items-center h-16">
        <NavLink
          to={"/home"}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 px-4 py-2.5 transition-all duration-200 ${
              isActive
                ? "bg-emerald-50 dark:bg-emerald-900/10 text-emerald-600 dark:text-emerald-400 font-medium"
                : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200 "
            }`
          }
        >
          <FontAwesomeIcon icon={faHome} />
          Home
        </NavLink>
        <NavLink
          to={"/food"}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 px-4 py-2.5 transition-all duration-200 ${
              isActive
                ? "bg-emerald-50 dark:bg-emerald-900/10 text-emerald-600 dark:text-emerald-400 font-medium"
                : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200"
            }`
          }
        >
          <FontAwesomeIcon icon={faUtensils} />
          Food
        </NavLink>
        <NavLink
          to={"/activity"}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 px-4 py-2.5 transition-all duration-200 ${
              isActive
                ? "bg-emerald-50 dark:bg-emerald-900/10 text-emerald-600 dark:text-emerald-400 font-medium"
                : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200"
            }`
          }
        >
          <FontAwesomeIcon icon={faHeartPulse} />
          Activity
        </NavLink>
        <NavLink
          to={"/profile"}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 px-4 py-2.5 transition-all duration-200 ${
              isActive
                ? "bg-emerald-50 dark:bg-emerald-900/10 text-emerald-600 dark:text-emerald-400 font-medium"
                : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200"
            }`
          }
        >
          <FontAwesomeIcon icon={faUser} />
          Profile
        </NavLink>
      </div>
    </nav>
  );
}

export default BottomMenu