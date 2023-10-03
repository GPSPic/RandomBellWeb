import RegularText from "../texts/RegularText";
import DayButton from "./DayButton";
import "./SetRoutine.css";
import "../../helpers/colours.css";
import { useState } from "react";

const DaysOfWeek = () => {
    const [mondaySelected, setMondaySelected] = useState(false)
    const [tuesdaySelected, setTuesdaySelected] = useState(false)
    const [wednesdaySelected, setWednesdaySelected] = useState(false)
    const [thursdaySelected, setThursdaySelected] = useState(false)
    const [fridaySelected, setFridaySelected] = useState(false)
    const [saturdaySelected, setSaturdaySelected] = useState(false)
    const [sundaySelected, setSundaySelected] = useState(false)
    
  const daysOfWeek = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
    

  const displayDayButtons = daysOfWeek.map((day) => {
    return <DayButton key={day} day={day} />;
  });

  return (
    <div className="days-selector">
      <RegularText text="Repeat" />
      <div className="day-button-box">{displayDayButtons}</div>
    </div>
  );
};

export default DaysOfWeek;
