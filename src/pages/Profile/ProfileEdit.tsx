import { useState } from "react";
import { useUserData } from "../../store/useUserData";
import { useAuthStore } from "../../store/useAuthStore";

interface IProfileEdit {
  onClose: () => void;
}

const ProfileEdit = ({ onClose }: IProfileEdit) => {
  const updateUserData = useUserData((state) => state.updateUserData);
  const currentUser = useAuthStore((state) => state.currentUser); // فرض بر داشتنِ ایمیل از auth
  const userData = useUserData((state) =>
    currentUser ? state.userProfiles[currentUser.email] : null,
  );

  // ۳. حالا می‌توانید از userData استفاده کنید.
  // نکته: چون ممکن است userData در لحظه اول null باشد، باید حتماً بررسی کنید:
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
  const handleSave = () => {
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
      onClose();
    } else {
      console.error("کاربر لاگین نیست!");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold text-white">Edit Your Profile</h2>
        <button
          onClick={onClose}
          className="text-slate-500 hover:text-white transition-colors"
        ></button>
      </div>

      <div className="space-y-5">
        {/* Age Field */}
        <FormField
          label="Age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
        />

        {/* Weight Field */}
        <FormField
          label="Weight (kg)"
          name="weight"
          type="number"
          value={formData.weight}
          onChange={handleChange}
        />

        {/* Height Field */}
        <FormField
          label="Height (cm)"
          name="height"
          type="number"
          value={formData.height}
          onChange={handleChange}
        />

        {/* Goal Field */}
        <div className="space-y-2">
          <label className="text-sm text-slate-400 flex items-center gap-2">
            Fitness Goal
          </label>
          <select
            name="goal"
            value={formData.goal}
            onChange={handleChange}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all cursor-pointer"
          >
            <option value="lose weight">Lose Weight</option>
            <option value="maintain weight">Maintain Weight</option>
            <option value="gain muscle">Gain Muscle</option>
          </select>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-10">
        <button
          onClick={onClose}
          className="flex-1 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all border border-slate-700"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="flex-1 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-lg shadow-emerald-900/20 transition-all flex items-center justify-center gap-2"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

interface FieldProps {
  label: string;
  name: string;
  type: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField = ({ label, name, type, value, onChange }: FieldProps) => (
  <div className="space-y-2">
    <label className="text-sm text-slate-400 flex items-center gap-2">
      {label}
    </label>
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
      />
    </div>
  </div>
);

export default ProfileEdit;
