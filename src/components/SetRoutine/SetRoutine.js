import { useState } from "react";

import StartTime from "./StartTime";
import EndTime from "./EndTime";
import NumberOfRings from "./NumberOfRings";
import DaysOfWeek from "./DaysOfWeek";
import MinInterval from "./MinInterval";
import "../../helpers/colours.css";
import "./SetRoutine.css";

const SetRoutine = () => {
  const [startTime, setStartTime] = useState("08:00");
  const [endTime, setEndTime] = useState("20:00");
  const [ringNum, setRingNum] = useState(0);

  const handleStartTimeChange = (timeValue) => {
    setStartTime(timeValue);
  };
  const handleEndTimeChange = (timeValue) => {
    setEndTime(timeValue);
  };

  const handleRingNumChange = (num) => {
    setRingNum(num);
  };

  return (
    <main className="set-routine">
      <div className="set-times">
        <StartTime
          startTime={startTime}
          handleStartTimeChange={handleStartTimeChange}
        />
        <EndTime endTime={endTime} handleEndTimeChange={handleEndTimeChange} />
      </div>
      <div className="number-interval-box">
        <NumberOfRings
          ringNum={ringNum}
          handleRingNumChange={handleRingNumChange}
        />
        <MinInterval />
      </div>
    </main>
  );
};

export default SetRoutine;
