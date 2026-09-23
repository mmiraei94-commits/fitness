import { useAuthStore } from "../store/useAuthStore";
import { useUserData } from "../store/useUserData";

const BodyMetricsCard = () => {
  const currentUser = useAuthStore((state) => state.currentUser);
  const email = currentUser?.email;

  // گرفتن دیتا از داخل آبجکت پروفایل بر اساس ایمیل
  const weight = useUserData((state) => email ? state.userProfiles[email]?.weight : null);
  const height = useUserData((state) => email ? state.userProfiles[email]?.height : null);

  // محاسبه BMI: وزن تقسیم بر مجذور قد (متر)
  const bmi = height > 0 ? (weight / Math.pow(height / 100, 2)).toFixed(1) : 0;

  return (
    <div className="bg-slate-900 text-white p-6 rounded-3xl w-full shadow-xl">
      {/* هدر کارت */}
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-indigo-100 p-3 rounded-2xl">
          <span className="text-indigo-600 text-xl">⚖️</span>
        </div>
        <div>
          <h3 className="font-bold text-lg">Body Metrics</h3>
          <p className="text-gray-400 text-sm">Your stats</p>
        </div>
      </div>

      {/* لیست متریک‌ها */}
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 text-gray-400">
            <div className="bg-slate-800 p-2 rounded-lg">⚖️</div>
            <span>Weight</span>
          </div>
          <span className="font-bold">{weight} kg</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 text-gray-400">
            <div className="bg-slate-800 p-2 rounded-lg">📏</div>
            <span>Height</span>
          </div>
          <span className="font-bold">{height} cm</span>
        </div>
      </div>

      <div className="border-t border-slate-700 my-4" />

      {/* بخش BMI */}
      <div className="flex justify-between items-end mb-2">
        <span className="text-gray-300">BMI</span>
        <span className="text-emerald-500 font-bold text-xl">{bmi}</span>
      </div>

      {/* نوار رنگی BMI */}
      <div className="flex w-full h-2 rounded-full overflow-hidden">
        <div className="w-1/4 bg-blue-600" />
        <div className="w-1/4 bg-emerald-500" />
        <div className="w-1/4 bg-orange-600" />
        <div className="w-1/4 bg-red-600" />
      </div>

      {/* اعداد زیر نوار */}
      <div className="flex justify-between text-gray-500 text-xs mt-2">
        <span>18.5</span>
        <span>25</span>
        <span>30</span>
      </div>
    </div>
  );
};

export default BodyMetricsCard;
