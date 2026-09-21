import { useUserData } from '../../store/useUserData';

const ProfileView = ({onEdit}) => {
    const age = useUserData((state) => state.age);
    const weight = useUserData((state) => state.weight);
    const height = useUserData((state) => state.height);
    const goal = useUserData((state) => state.goal);
    const dailyCalorieIntake = useUserData((state) => state.dailyCalorieIntake);
    const dailyCaloriesBurn = useUserData((state) => state.dailyCaloriesBurn);
  return (
    <div className="space-y-4">
      {/* Age */}
      <div className="bg-slate-800/50 rounded-xl px-4 py-4 flex items-center gap-4 border border-slate-800">
        <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
          {/* محل آیکون سن */}
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
            className="lucide lucide-calendar size-4.5 text-blue-600 dark:text-blue-400"
            aria-hidden="true"
          >
            <path d="M8 2v4"></path>
            <path d="M16 2v4"></path>
            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
            <path d="M3 10h18"></path>
          </svg>
        </div>
        <div>
          <p className="text-sm text-slate-500">Age</p>
          <p className="font-semibold text-white">
            {age !== null ? `${age} years` : "Not set"}
          </p>
        </div>
      </div>

      {/* Weight */}
      <div className="bg-slate-800/50 rounded-xl px-4 py-4 flex items-center gap-4 border border-slate-800">
        <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
          
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
            className="lucide lucide-scale size-4.5 text-purple-600 dark:text-purple-400"
            aria-hidden="true"
          >
            <path d="M12 3v18"></path>
            <path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path>
            <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path>
            <path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path>
            <path d="M7 21h10"></path>
          </svg>
        </div>
        <div>
          <p className="text-sm text-slate-500">Weight</p>
          <p className="font-semibold text-white">
            {weight !== null ? `${weight} kg` : "Not set"}
          </p>
        </div>
      </div>

      {/* Height */}
      <div className="bg-slate-800/50 rounded-xl px-4 py-4 flex items-center gap-4 border border-slate-800">
        <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center">
          
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
            className="lucide lucide-user size-4.5 text-green-600 dark:text-green-400"
            aria-hidden="true"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div>
          <p className="text-sm text-slate-500">Height</p>
          <p className="font-semibold text-white">
            {height !== null ? `${height} cm` : "Not set"}
          </p>
        </div>
      </div>

      {/* Goal */}
      <div className="bg-slate-800/50 rounded-xl px-4 py-4 flex items-center gap-4 border border-slate-800">
        <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
          {/* محل آیکون هدف */}
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
            className="lucide lucide-target size-4.5 text-orange-600 dark:text-orange-400"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="6"></circle>
            <circle cx="12" cy="12" r="2"></circle>
          </svg>
        </div>
        <div>
          <p className="text-sm text-slate-500">Goal</p>
          <p className="font-semibold text-white">
            {goal || "maintain weight"}
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={onEdit}
        className="mt-6 w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors border border-slate-700"
      >
        Edit Profile
      </button>
    </div>
  );
}

export default ProfileView