import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUserData } from "../../store/useUserData";

const GetDataUserStep2 = ({ onBack, onNext }) => {
  const weight = useUserData((state) => state.weight);
  const setWeight = useUserData((state) => state.setWeight);
  const height = useUserData((state) => state.height);
  const setHeight= useUserData((state) => state.setHeight);

  const handleContinue = () => {
    if (weight === null) {
      return;
    }
    onNext();
  };
  return (
    <main>
      {/* Question */}
      <div className="mt-4 flex items-center gap-3">
        <div>
          <img src="public/measurements.svg" alt="measurements" />
        </div>

        <div>
          <h2 className="text-lg font-semibold">Your measurements</h2>

          <p className="text-lg text-text-secondary">
            Help us track your progress
          </p>
        </div>
      </div>

      {/* Weight */}
      <div className="mt-4">
        <label
          htmlFor="weight"
          className="mb-2 block text-sm text-text-primary"
        >
          Weight (kg) <span className="text-red-500">*</span>
        </label>

        <input
          id="weight"
          min="1"
          type="number"
          value={weight ?? ""}
          onKeyDown={(e) => {
            if (e.key === "-") {
              e.preventDefault();
            }
          }}
          onChange={(e) => {
            const value = e.target.value;

            if (value === "") {
              setWeight(null);
              return;
            }

            if (Number(value) < 0) {
              return;
            }

            setWeight(Number(value));
          }}
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
      {/* Height */}
      <div className="mt-4">
        <label
          htmlFor="height"
          className="mb-2 block text-sm text-text-primary"
        >
          Height (cm) - Optional
        </label>

        <input
          id="height"
          type="number"
          min="1"
          value={height ?? ""}
          onKeyDown={(e) => {
            if (e.key === "-") {
              e.preventDefault();
            }
          }}
          onChange={(e) => {
            const value = e.target.value;

            if (value === "") {
              setHeight(null);
              return;
            }

            if (Number(value) < 0) {
              return;
            }

            setHeight(Number(value));
          }}
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

export default GetDataUserStep2;
