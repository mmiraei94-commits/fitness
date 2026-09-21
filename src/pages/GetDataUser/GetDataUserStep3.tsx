import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUserData } from "../../store/useUserData";

const GetDataUserStep3 = ({ onBack, onNext }) => {
  const goal = useUserData((state) => state.goal);
  const setGoal = useUserData((state) => state.setGoal);
  const dailyCalorieIntake = useUserData((state) => state.dailyCalorieIntake);
  const setDailyCalorieIntake = useUserData(
    (state) => state.setDailyCalorieIntake,
  );
  const dailyCaloriesBurn = useUserData((state) => state.dailyCaloriesBurn);
  const setDailyCaloriesBurn = useUserData(
    (state) => state.setDailyCaloriesBurn,
  );

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
            onClick={() => setGoal(item.value)}
            className={`w-full rounded-xl border px-5 py-2 text-left
              text-sm transition-all duration-200
              ${
                goal === item.value
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
            {dailyCalorieIntake} kcal
          </span>
        </div>

        <input
          type="range"
          min="1000"
          max="4000"
          step="50"
          value={dailyCalorieIntake}
          onChange={(e) => setDailyCalorieIntake(Number(e.target.value))}
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

          <span className="text-sm font-semibold text-[#00d9a5]">
            {dailyCaloriesBurn} kcal
          </span>
        </div>

        <input
          type="range"
          min="0"
          max="2000"
          step="50"
          value={dailyCaloriesBurn}
          onChange={(e) => setDailyCaloriesBurn(Number(e.target.value))}
          className="h-2 w-full cursor-pointer rounded-full
            bg-[#344258]
            accent-[#00d9a5]"
        />
      </div>

      {/* Continue */}
      <button
        type="button"
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

