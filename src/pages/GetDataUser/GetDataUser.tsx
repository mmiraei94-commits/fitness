import { useState } from "react";
import GetDataUserStep1 from "./GetDataUserStep1";
import GetDataUserStep2 from "./GetDataUserStep2";
import GetDataUserStep3 from "./GetDataUserStep3";

const GetUserData = () => {
  const [step, setStep] = useState(1);

  return (
    <main className="min-h-screen bg-bg-dark px-7 py-4 text-text-primary flex justify-center">
      <section className="w-2xl">
        {/* Header */}
        <div className="mb-3 flex items-center gap-2">
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

          <h1 className="text-2xl font-bold font-semibold">FitTrack</h1>
        </div>

        {/* Description */}
        <p className="text-lg text-text-secondary">
          Let's personalize your experience
        </p>

        {/* Progress */}
        <div className="mt-4">
          <div className="flex gap-1">
            <div
              className={`h-1 flex-1 rounded-full ${
                step >= 1 ? "bg-button-primary" : "bg-[#1c2a40]"
              }`}
            />

            <div
              className={`h-1 flex-1 rounded-full ${
                step >= 2 ? "bg-button-primary" : "bg-[#1c2a40]"
              }`}
            />

            <div
              className={`h-1 flex-1 rounded-full ${
                step >= 3 ? "bg-button-primary" : "bg-[#1c2a40]"
              }`}
            />
          </div>

          <p className="mt-2 text-sm text-text-secondary">Step 1 of 3</p>
        </div>

        {step === 1 && <GetDataUserStep1 onNext={() => setStep(2)} />}

        {step === 2 && (
          <GetDataUserStep2
            onBack={() => setStep(1)}
            onNext={() => setStep(3)}
          />
        )}

        {step === 3 && <GetDataUserStep3 onBack={() => setStep(2)} />}
      </section>
    </main>
  );
};

export default GetUserData;
