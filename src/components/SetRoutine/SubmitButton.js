import { useContext } from "react";

import SmallText from "../texts/SmallText";
import { ThemeContext } from "../../containers/Container";
import { getRandomTimesForValidDays } from "../../helpers/randomiser/randomiser";
import "./SetRoutine.css";
import "../../helpers/colours.css";

const SubmitButton = ({ routineSettings, handleSubmitRandomTimes }) => {
  const theme = useContext(ThemeContext);
  const submitButtonTheme = "sbt-btn-" + theme;

  const handleClick = (e) => {
    e.preventDefault();
    const updatedData = getRandomTimesForValidDays(routineSettings)
    handleSubmitRandomTimes(updatedData)
  };

  return (
    <button className={"sbt-btn " + submitButtonTheme} onClick={handleClick}>
      <SmallText text="Start my random timer" />
    </button>
  );
};

export default SubmitButton;
