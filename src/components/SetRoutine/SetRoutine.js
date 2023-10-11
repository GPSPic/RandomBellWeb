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

const SetRoutine = ({
  routineSettings,
  handleStartTimeChange,
  handleEndTimeChange,
  handleRingNumChange,
  handleMinIntChange,
  handleSelectedDay,
  handleSubmitRandomTimes
}) => {

  const startTime = routineSettings.startTime
  const endTime = routineSettings.endTime
  const ringNum = routineSettings.ringNum
  const routineFractionMinValue = getIntervalLength(minuteConverter(startTime), minuteConverter(endTime), ringNum)

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
            {totalLengthOfTime(minuteConverter(routineSettings.startTime), minuteConverter(routineSettings.endTime))}
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
