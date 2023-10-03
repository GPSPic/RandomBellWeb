import { useState } from "react";

import StartTime from "./StartTime";
import EndTime from "./EndTime";
import NumberOfRings from "./NumberOfRings";
import DaysOfWeek from "./DaysOfWeek";
import MinInterval from "./MinInterval";
import "../../helpers/colours.css";
import "./SetRoutine.css";
import RegularText from "../texts/RegularText";
import SmallText from "../texts/SmallText";

const SetRoutine = () => {
  const [startTime, setStartTime] = useState("08:00");
  const [endTime, setEndTime] = useState("20:00");
  const [ringNum, setRingNum] = useState(0);
  const [minInterval, setMinInterval] = useState("00:30");

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

  return (
    <main className="routine-main">
      <form className="routine-form">
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
          <div className="days-selector">
            <RegularText text="Repeat" />
            <div className="day-button-box">
             
              
              {/* <div className="day">
                <lable>
                  <SmallText text="Sunday" />
                </lable>
                <input type="checkbox" /> <br />
              </div> */}

            </div>
          </div>
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
        <button className="form-btn">submit</button>
      </form>
    </main>
  );
};

export default SetRoutine;
