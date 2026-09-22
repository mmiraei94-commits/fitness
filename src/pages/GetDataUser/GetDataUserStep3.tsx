import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUserData } from "../../store/useUserData";
import { useAuthStore } from "../../store/useAuthStore";
import { useState } from "react";

const GetDataUserStep3 = ({ onBack, onNext }) => {
  const updateUserData = useUserData((state) => state.updateUserData);
   const currentUser = useAuthStore((state) => state.currentUser); // فرض بر داشتنِ ایمیل از auth
   const userData = useUserData((state) =>
     currentUser ? state.userProfiles[currentUser.email] : null,
   );
 
   const [formData, setFormData] = useState({
     age: userData?.age ?? 0,
     weight: userData?.weight ?? 0,
     height: userData?.height ?? 0,
     goal: userData?.goal ?? "maintain weight",
     dailyCalorieIntake: userData?.dailyCalorieIntake ?? 0,
     dailyCaloriesBurn: userData?.dailyCaloriesBurn ?? 0,
   });
 
   const handleChange = (
     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
   ) => {
     const { name, value } = e.target;
     setFormData((prev) => ({
       ...prev,
       [name]: name === "goal" ? value : Number(value),
     }));
   };

const handleGoalSelect = (goalValue: string) => {
  setFormData((prev) => ({ ...prev, goal: goalValue as any }));
};
 
   // ۲. متد handleSave جدید
   const handleContinue = () => {
     if (currentUser) {
       // ارسال ایمیل کاربر و آبجکتِ تغییرات
       updateUserData(currentUser.email, {
         age: formData.age,
         weight: formData.weight,
         height: formData.height,
         goal: formData.goal as
           | "lose weight"
           | "maintain weight"
           | "gain muscle",
         dailyCalorieIntake: formData.dailyCalorieIntake,
         dailyCaloriesBurn: formData.dailyCaloriesBurn,
       });
       onNext();
     } else {
       console.error("کاربر لاگین نیست!");
     }
   };

    const goals = [
      {
        value: "lose weight",
        label: "Lose Weight",
      },
      {
        value: "maintain weight",
        label: "Maintain Weight",
      },
      {
        value: "gain muscle",
        label: "Gain Muscle",
      },
    ] as const;

  return (
    <main>
      {/* Question */}
      <div className="mt-4 flex items-center gap-3">
        <div>
          <img src="public/goal.svg" alt="measurements" />
        </div>

        <div>
          <h2 className="text-lg font-semibold">What's your goal?</h2>

          <p className="text-lg text-text-secondary">
            We'll tailor your experience
          </p>
        </div>
      </div>

      {/* Goals */}
      <div className="space-y-4 mt-3">
        {goals.map((item) => (
          <button
            key={item.value}
            type="button"
            name="goal"
            onClick={()=>handleGoalSelect(item.value)}
            className={`w-full rounded-xl border px-5 py-2 text-left
              text-sm transition-all duration-200
              ${
                formData.goal === item.value
                  ? "border-[#00d9a5] shadow-[0_0_0_1px_#00d9a5]"
                  : "border-[#344258]"
              }
              bg-[#202d42] text-white
            `}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-[#29374c]" />

      {/* Daily Targets */}
      <h2 className="mb-6 text-lg font-medium text-white">Daily Targets</h2>

      {/* Daily Calorie Intake */}
      <div className="mb-7">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#d5d9e2]">Daily Calorie Intake</span>

            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#8b96a8] text-[10px] text-[#aab3c1]">
              i
            </span>
          </div>

          <span className="text-sm font-semibold text-[#00d9a5]">
            {formData.dailyCalorieIntake} kcal
          </span>
        </div>

        <input
          type="range"
          name="dailyCalorieIntake"
          min="1000"
          max="4000"
          step="50"
          value={formData.dailyCalorieIntake}
          onChange={handleChange}
          className="h-2 w-full cursor-pointer rounded-full
            bg-[#344258]
            accent-[#00d9a5]"
        />
      </div>

      {/* Daily Calorie Burn */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#d5d9e2]">Daily Calorie Burn</span>

            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#8b96a8] text-[10px] text-[#aab3c1]">
              i
            </span>
          </div>

          <span className="text-sm font-semibold text-[#00d9a5]">{} kcal</span>
        </div>

        <input
          type="range"
          name="dailyCaloriesBurn"
          min="0"
          max="2000"
          step="50"
          value={formData.dailyCaloriesBurn}
          onChange={handleChange}
          className="h-2 w-full cursor-pointer rounded-full
            bg-[#344258]
            accent-[#00d9a5]"
        />
      </div>

      {/* Continue */}
      <button
        type="button"
        onClick={handleContinue}
        className="
          fixed
          bottom-10
          right-10
          flex
          px-4
          py-2
          items-center
          justify-center
          gap-2
          rounded-md
          bg-button-primary
          text-lg
          font-medium
          text-white
          transition
          hover:bg-button-hover
        "
      >
        Continue
        <FontAwesomeIcon icon={faArrowRight} className="text-[8px]" />
      </button>
      {/* Back */}
      <button
        type="button"
        onClick={onBack}
        className="
          fixed
          bottom-10
          right-45
          flex
          px-4
          py-2
          items-center
          justify-center
          gap-2
          rounded-md
          bg-button-primary
          text-lg
          font-medium
          text-white
          transition
          hover:bg-button-hover
        "
      >
        <FontAwesomeIcon icon={faArrowLeft} className="text-[8px]" />
        Back
      </button>
    </main>
  );
};

export default GetDataUserStep3;

