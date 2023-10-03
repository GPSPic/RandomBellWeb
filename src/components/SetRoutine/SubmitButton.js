import { useContext } from "react";

import SmallText from "../texts/SmallText";
import { ThemeContext } from "../../containers/Container";
import "./SetRoutine.css";
import "../../helpers/colours.css";
import { Link } from "react-router-dom";

const SubmitButton = ({
  startTime,
  endTime,
  minInterval,
  ringNum,
  daysSelected,
}) => {
  const theme = useContext(ThemeContext);
  const submitButtonTheme = "sbt-btn-" + theme;

  const handleClick = (e) => {
    e.preventDefault();
    const routine = {
      startTime: startTime,
      endTime: endTime,
      ringNum: ringNum,
      minInterval: minInterval,
      daysSelected: daysSelected,
    };
  };

  return (
    // <div className="link-sbt-btn">
      <Link to="/">
        <button
          className={"sbt-btn " + submitButtonTheme}
          onClick={handleClick}
        >
          <SmallText text="Start my random timer" />
        </button>
      </Link>
    // </div>
  );
};

export default SubmitButton;
