import { useState } from "react";
import RegularText from "../texts/RegularText.js";

import "./SetRoutine.css";
import "../../helpers/colours.css";
import { minuteConverter } from "../../helpers/randomiser/randomiser.js";
import WarningText from "../texts/WarningText.js";

const MinInterval = ({ minInterval, handleMinIntChange, routineFractionMinValue }) => {
  const [newMinInterval, setNewMinInterval] = useState(minInterval);

  const handleChange = (e) => {
    setNewMinInterval(e.target.value);
    handleMinIntChange(e.target.value);
  };

  const intervalErrorDisplay = () => {
    if (routineFractionMinValue <= minuteConverter(minInterval)) {
      return <WarningText mainAlert="Warning! " text="Your Minimum Interval is too large." />
    }
  }
  
  return (
    <div className="min-interval">
      <RegularText text="Minimum Interval" />
      <input type="time" value={newMinInterval} onChange={handleChange} />
      {intervalErrorDisplay()}
    </div>
  );
};

export default MinInterval;
