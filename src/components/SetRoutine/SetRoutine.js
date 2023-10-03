import { useState } from "react";

import StartTime from "./StartTime";
import EndTime from "./EndTime";
import NumberOfRings from "./NumberOfRings";
import DaysOfWeek from "./DaysOfWeek";
import MinInterval from "./MinInterval";
import SubmitButton from "./SubmitButton";
import "../../helpers/colours.css";
import "./SetRoutine.css";

const SetRoutine = () => {
  const [startTime, setStartTime] = useState("08:00");
  const [endTime, setEndTime] = useState("20:00");
  const [ringNum, setRingNum] = useState(0);
  const [minInterval, setMinInterval] = useState("00:30");
  const [daysSelected, setDaysSelected] = useState({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  });

  const handleStartTimeChange = (timeValue) => {
    setStartTime(timeValue);
  };
  const handleEndTimeChange = (timeValue) => {
    setEndTime(timeValue);
  };

  const handleRingNumChange = (num) => {
    setRingNum(num);
  };

  const handleMinIntChange = (interval) => {
    setMinInterval(interval);
  };

  const handleSelectedDay = (dayValue) => {
    const newDaysSelected = { ...daysSelected };
    newDaysSelected[dayValue] = !daysSelected[dayValue];
    setDaysSelected(newDaysSelected);
  };

  return (
    <main className="routine-main">
      <div className="routine-box">
        <div className="set-routine">
          <div className="set-times">
            <StartTime
              startTime={startTime}
              handleStartTimeChange={handleStartTimeChange}
            />
            <EndTime
              endTime={endTime}
              handleEndTimeChange={handleEndTimeChange}
            />
          </div>

          <DaysOfWeek
            daysSelected={{ daysSelected }}
            handleSelectedDay={handleSelectedDay}
          />

          <div className="number-interval-box">
            <NumberOfRings
              ringNum={ringNum}
              handleRingNumChange={handleRingNumChange}
            />
            <MinInterval
              minInterval={minInterval}
              handleMinIntChange={handleMinIntChange}
            />
          </div>
        </div>
        <SubmitButton
          startTime={startTime}
          endTime={endTime}
          ringNum={ringNum}
          minInterval={minInterval}
          daysSelected={daysSelected}
        />
      </div>
    </main>
  );
};

export default SetRoutine;
