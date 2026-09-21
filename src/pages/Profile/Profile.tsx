import React, { useState } from "react";
import { useUserData } from "../../store/useUserData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import ProfileEdit from "./ProfileEdit";
import ProfileView from "./ProfileView";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Selectorهای متدهای set جهت اعمال ویرایش
  const setAge = useUserData((state) => state.setAge);
  const setWeight = useUserData((state) => state.setWeight);
  const setHeight = useUserData((state) => state.setHeight);
  const setGoal = useUserData((state) => state.setGoal);
  const setDailyCalorieIntake = useUserData(
    (state) => state.setDailyCalorieIntake,
  );
  const setDailyCaloriesBurn = useUserData(
    (state) => state.setDailyCaloriesBurn,
  );

  return (
    <section className="grow ml-64 h-screen">
      <div className="min-h-screen">
        <div className="dark:bg-slate-900 p-6">
          <h1 className="font-bold text-white text-2xl">Profile</h1>
          <p className="text-slate-200">Manage your settings</p>
        </div>
        <div className="  bg-[#0b1120] text-slate-200 p-6 font-sans">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* بخش پروفایل (سمت چپ) */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
              {/* هدر پروفایل */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center">
                  {/* محل آیکون پروفایل */}
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Your Profile</h2>
                  <p className="text-sm text-slate-500">
                    Member since 9/18/2026
                  </p>
                </div>
              </div>

              {/* آیتم‌های پروفایل */}
              {isEditing ? (
                <ProfileEdit onClose={() => setIsEditing(false)} />
              ) : (
                <ProfileView onEdit={()=> setIsEditing(true)} />
              )}

            </div>

            {/* بخش آمار و خروج (سمت راست) */}
            <div className="flex flex-col gap-6">
              {/* کارت آمار */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">
                  Your Stats
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 rounded-xl py-6 flex flex-col items-center border border-slate-800">
                    <span className="text-3xl font-bold text-emerald-400">
                      {/* {dailyCalorieIntake} */}
                    </span>
                    <span className="text-sm text-slate-500 mt-1">
                      Calorie Intake
                    </span>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl py-6 flex flex-col items-center border border-slate-800">
                    <span className="text-3xl font-bold text-blue-400">
                      {/* {dailyCaloriesBurn} */}
                    </span>
                    <span className="text-sm text-slate-500 mt-1">
                      Calories Burn
                    </span>
                  </div>
                </div>
              </div>

              {/* دکمه خروج */}
              <button
                type="button"
                onClick={() => {
                
                  console.log("Logged out!");
                }}
                className="py-3.5 rounded-xl bg-rose-950/40 hover:bg-rose-900/50 text-rose-400 border border-rose-900/40 font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
