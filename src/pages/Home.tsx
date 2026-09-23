import BodyMetricsCard from "../components/BodyMetricsCard";
import { useAuthStore } from "../store/useAuthStore";
import { useUserData } from "../store/useUserData";

const Home = () => {
  const userName = useAuthStore(
    (state) => state.currentUser?.userName || "User",
  );


  return (
    <div className="lg:ml-64  flex flex-col min-h-screen bg-[#0b1120]">
      {/* بخش سبز رنگ بالای صفحه */}
      <div className="bg-emerald-500 p-6 pb-24 text-white rounded-b-3xl ">
        <p className="text-sm opacity-80 mb-1">Welcome back</p>
        <h1 className="text-3xl font-bold">Hi there! 👋 {userName}</h1>

        {/* بنر دعوت به اقدام */}
        <div className="mt-6 bg-emerald-600/50 p-4 rounded-xl flex items-center gap-3 backdrop-blur-sm">
          <span className="text-2xl">💪</span>
          <p className="font-medium">Ready to crush today? Start logging!</p>
        </div>
      </div>

      {/* کارت‌های پایین (Dashboard Content) */}
      <div className="px-6 -mt-16">
        <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl flex justify-between items-center">
          {/* سمت چپ: مصرف شده */}
          <div className="flex gap-4 items-center">
            <div className="bg-orange-100 p-3 rounded-xl">
              <span className="text-2xl">🍔</span>
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider">
                Calories Consumed
              </p>
              <h2 className="text-3xl font-bold"></h2>
            </div>
          </div>


        </div>
      </div>

      <section className=" p-8 grid gap-4 grid-cols-1 lg:grid-cols-2">
        <BodyMetricsCard/>
        <BodyMetricsCard/>

      </section>
    </div>
  );
}

export default Home