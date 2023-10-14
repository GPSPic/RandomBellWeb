import { useState } from "react";

import StartTime from "./StartTime";
import EndTime from "./EndTime";
import NumberOfRings from "./NumberOfRings";
import DaysOfWeek from "./DaysOfWeek";
import MinInterval from "./MinInterval";
import SubmitButton from "./SubmitButton";
import { getIntervalLength, minuteConverter, totalLengthOfTime } from "../../helpers/randomiser/randomiser";
import "../../helpers/colours.css";
import "./SetRoutine.css";
import WarningText from "../texts/WarningText";

const SetRoutine = ({
  routineSettings,
  handleStartTimeChange,
  handleEndTimeChange,
  handleRingNumChange,
  handleMinIntChange,
  handleSelectedDay,
  handleSubmitRandomTimes
}) => {

  const [startTime, endTime, ringNum] = [routineSettings.startTime, routineSettings.endTime, routineSettings.ringNum]
  const routineFractionMinValue = getIntervalLength(minuteConverter(startTime), minuteConverter(endTime), ringNum)
  const lengthErrorDisplay = function () {
    if (!totalLengthOfTime(minuteConverter(startTime), minuteConverter(endTime))) {
     return <WarningText mainAlert="Warning! " text="Your end time needs to be later than your start time (for now)" />
   } 
  } 

  return (
    <main className="routine-main">
      <form className="routine-box">
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
            {lengthErrorDisplay()}
          </div>

          <DaysOfWeek
            daysSelected={routineSettings.daysSelected}
            handleSelectedDay={handleSelectedDay}
          />

          <div className="number-interval-box">
            <NumberOfRings
              ringNum={ringNum}
              handleRingNumChange={handleRingNumChange}
            />
            <MinInterval
              minInterval={routineSettings.minInterval}
              handleMinIntChange={handleMinIntChange}
              routineFractionMinValue={routineFractionMinValue}
            />
          </div>
        </div>
        <SubmitButton
          routineSettings={routineSettings}
          handleSubmitRandomTimes={handleSubmitRandomTimes}
        />
      </form>
    </main>
  );
};

export default SetRoutine;
