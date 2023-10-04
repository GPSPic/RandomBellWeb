import { useState } from "react";
import RegularText from "../texts/RegularText";
import "./SetRoutine.css";
import "../../helpers/colours.css";
import WarningText from "../texts/WarningText";

const NumberOfRings = ({ ringNum, handleRingNumChange }) => {
  const [newRingNum, setNewRingNum] = useState(ringNum);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    if (e.target.value >= 0 && e.target.value <= 720) {
      setError(false);
      setNewRingNum(e.target.value);
      handleRingNumChange(e.target.value);
    } else {
      setError(true);
    }
  };

  const numberOutOfBounds = () => {
    if (error) {
      return (
        <div className="alert-warning">
          <WarningText
            mainAlert="Warning! "
            text="You can only enter numbers between 0 and 720!!!"
          />
        </div>
      );
    }
  };

  return (
    <div className="ring-num">
      <RegularText text="Number of Rings" />
      <input
        type="number"
        min="0"
        max="720"
        value={newRingNum}
        onChange={handleChange}
      />
      {numberOutOfBounds()}
    </div>
  );
};

export default NumberOfRings;
