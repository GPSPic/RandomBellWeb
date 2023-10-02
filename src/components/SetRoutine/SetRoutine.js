import { useState } from "react";

import StartTime from "./StartTime";
import EndTime from "./EndTime";
import NumberOfRings from "./NumberOfRings";
import DaysOfWeek from "./DaysOfWeek";
import MinInterval from "./MinInterval";
import "../../helpers/colours.css"
import "./SetRoutine.css"

const SetRoutine = () => {
    const [startTime, setStartTime] = useState("08:00")
    const [endTime, setEndTime] = useState("20:00")

    const handleStartTimeChange = (timeValue) => {
        setStartTime(timeValue)
    }
    const handleEndTimeChange = (timeValue) => {
        setEndTime(timeValue)
    }

    return ( 
        <div className="set-routine">
            <StartTime startTime={startTime} handleStartTimeChange={handleStartTimeChange}/>
            <EndTime endTime={endTime} handleEndTimeChange={handleEndTimeChange}/>
        </div>
     );
}
 
export default SetRoutine;