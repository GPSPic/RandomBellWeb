import { useState } from "react";

import StartTime from "./StartTime";
import EndTime from "./EndTime";
import NumberOfRings from "./NumberOfRings";
import DaysOfWeek from "./DaysOfWeek";
import MinInterval from "./MinInterval";
import SubmitButton from "./SubmitButton";
import "../../helpers/colours.css";
import "./SetRoutine.css";


const SetRoutine = ({
  startTime,
  endTime,
  minInterval,
  ringNum,
  daysSelected,
  handleStartTimeChange,
  handleEndTimeChange,
  handleRingNumChange,
  handleMinIntChange,
  handleSelectedDay,
}) => {
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
            daysSelected={daysSelected}
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
