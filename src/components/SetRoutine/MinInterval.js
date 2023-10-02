import { useState } from "react";
import RegularText from "../texts/RegularText.js";

import "./SetRoutine.css";
import "../../helpers/colours.css";

const MinInterval = ({ minInterval, handleMinIntChange }) => {
  const [newMinInterval, setNewMinInterval] = useState(minInterval);

  const handleChange = (e) => {
    setNewMinInterval(e.target.value);
    handleMinIntChange(e.target.value);
  };
  
  return (
    <div className="min-interval">
      <RegularText text="Minimum Interval" />
      <input type="time" value={newMinInterval} onChange={handleChange} />
    </div>
  );
};

export default MinInterval;
