import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useUserData } from "../../store/useUserData";
import { useAuthStore } from "../../store/useAuthStore";
import { useState } from "react";

const GetDataUserStep1 = ({ onNext }) => {
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
      });
      onNext();
    } else {
      console.error("کاربر لاگین نیست!");
    }
  };
  // if (age === null) {
  //   return;
  // }

  return (
    <main>
      {/* Question */}
      <div className="mt-4 flex items-center gap-3">
        <div>
          <img src="public/user.svg" alt="measurements" />
        </div>

        <div>
          <h2 className="text-lg font-semibold">How old are you?</h2>

          <p className="text-lg text-text-secondary">
            This helps us calculate your needs
          </p>
        </div>
      </div>

      {/* Age */}
      <div className="mt-4">
        <label htmlFor="age" className="mb-2 block text-sm text-text-primary">
          Age <span className="text-red-500">*</span>
        </label>

        <input
          id="age"
          name="age"
          type="number"
          value={formData.age ?? ""}
          onChange={handleChange}
          className="
              h-[29px]
              w-full
              rounded-md
              border
              border-border
              bg-input-bg
              px-3
              text-xs
              text-text-primary
              outline-none
              focus:border-border-focus
            "
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
    </main>
  );
};

export default GetDataUserStep1;
