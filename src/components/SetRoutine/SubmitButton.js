import { useContext } from "react";

import SmallText from "../texts/SmallText";
import { ThemeContext } from "../../containers/Container";
import "./SetRoutine.css";
import "../../helpers/colours.css";

const SubmitButton = () => {
  const theme = useContext(ThemeContext);
  const submitButtonTheme = "sbt-btn-" + theme;

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <button className={"sbt-btn " + submitButtonTheme} onClick={handleClick}>
      <SmallText text="Start my random timer" />
    </button>
  );
};

export default SubmitButton;
