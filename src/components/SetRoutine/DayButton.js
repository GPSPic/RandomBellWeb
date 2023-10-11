import { useContext } from "react";

import SmallText from "../texts/SmallText";
import { ThemeContext } from "../../containers/Container";

const DayButton = ({ day, handleSelectedDay, buttonSelected }) => {
  const theme = useContext(ThemeContext);
  const buttonBackground = "day-button-" + theme;
  const buttonSelectedTheme = buttonSelected + "-" + theme;

  const handleClick = (e) => {
    e.preventDefault();
    handleSelectedDay(e.currentTarget.value);
  };

  return (
    <button
      id={day}
      value={day}
      className={
        `${day}` +
        "-button day-button " +
        buttonBackground +
        " " +
        buttonSelectedTheme
      }
      onClick={handleClick}
    >
      <div className="button-sizer">
        <SmallText text={day[0].toUpperCase() + day[1] + day[2]} />
      </div>
    </button>
  );
};

export default DayButton;
