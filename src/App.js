import "./App.css";
import OnboardingModal from "./component/OnboardingModal";
import Register from "./component/Register";
import { useState } from "react";

function App() {
  const [isModalShown, setIsModalShown] = useState(true);
  const [step, setStep] = useState(0);

  const [blurness, setBlurness] = useState([
    { num: 1, blur: false, hidden: true, disabled: false },
    { num: 2, blur: false, hidden: true, disabled: false },
    { num: 3, blur: false, hidden: true, disabled: false },
    { num: 4, blur: false, hidden: true, disabled: false },
    { num: 5, blur: false, hidden: true, disabled: false },
    { num: 6, blur: false, hidden: true, disabled: false },
    { num: 7, blur: false, hidden: true, disabled: false },
    { num: 8, blur: false, hidden: true, disabled: false },
  ]);

  const handleClosePopover = () => {
    setBlurness([
      { num: 1, blur: false, hidden: true, disabled: false },
      { num: 2, blur: false, hidden: true, disabled: false },
      { num: 3, blur: false, hidden: true, disabled: false },
      { num: 4, blur: false, hidden: true, disabled: false },
      { num: 5, blur: false, hidden: true, disabled: false },
      { num: 6, blur: false, hidden: true, disabled: false },
      { num: 7, blur: false, hidden: true, disabled: false },
      { num: 8, blur: false, hidden: true, disabled: false },
    ]);

    console.log(blurness);
  };
  const handleStepClick = (num) => {
    if (num >= 1 && num <= 8) {
      setStep(num);
      blurness.map((item) => {
        item.disabled = true;
        if (item.num !== num) {
          item.blur = true;
          item.hidden = true;
        } else {
          item.blur = false;
          item.hidden = false;
        }
        return blurness;
      });

      setBlurness(blurness);
      console.log(blurness);
    } else {
      handleClosePopover();
    }
  };

  const HandleContinueClick = () => {
    setIsModalShown(false);
    setStep(1);
    console.log(step);
    blurness.map((item) => {
      item.disabled = true;
      if (item.num !== 1) {
        item.blur = true;
      } else {
        item.hidden = false;
      }
      return blurness;
    });
    setBlurness(blurness);
  };
  const HandleCancelClick = () => {
    setIsModalShown(false);
    setStep(0);
  };
  return (
    <div>
      {isModalShown && (
        <OnboardingModal
          HandleCancelClick={HandleCancelClick}
          HandleContinueClick={HandleContinueClick}
        />
      )}

      <Register
        handleClosePopover={handleClosePopover}
        handleStepClick={handleStepClick}
        step={step}
        blurness={blurness}
      />
    </div>
  );
}

export default App;
