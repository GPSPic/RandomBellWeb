import RegularText from "../texts/RegularText";
import DayButton from "./DayButton";
import "./SetRoutine.css";
import "../../helpers/colours.css";
import { useState } from "react";

const DaysOfWeek = () => {
  const [daysSelected, setDaysSelected] = useState({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  });

  const handleSelectedDay = (dayValue) => {
    const newDaysSelected = {...daysSelected};
    newDaysSelected[dayValue] = !daysSelected[dayValue]; 
    setDaysSelected(newDaysSelected);
  };

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
    return (
      <DayButton
        key={day}
        day={day}
        handleSelectedDay={handleSelectedDay}
        buttonSelected={daysSelected[day] ? "button-selected" : "not-selected"}
      />
    );
  });

  return (
    <div className="days-selector">
      <RegularText text="Repeat" />
      <div className="day-button-box">{displayDayButtons}</div>
    </div>
  );
};

export default DaysOfWeek;
