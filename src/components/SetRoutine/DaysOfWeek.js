import RegularText from "../texts/RegularText";
import DayButton from "./DayButton";
import "./SetRoutine.css";
import "../../helpers/colours.css";

const DaysOfWeek = ({ daysSelected, handleSelectedDay }) => {
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
      <ul className="day-button-box">{displayDayButtons}</ul>
    </div>
  );
};

export default DaysOfWeek;
