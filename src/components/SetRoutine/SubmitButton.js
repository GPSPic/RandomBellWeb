import SmallText from "../texts/SmallText";
import "./SetRoutine.css";
import "../../helpers/colours.css";
import { useContext } from "react";
import { ThemeContext } from "../../containers/Container";
const SubmitButton = () => {
      const theme = useContext(ThemeContext)
      const submitButtonTheme = "sbt-btn-" + theme
      
  return (
    <button className={"sbt-btn "+ submitButtonTheme}>
      <SmallText text="Start my random timer" />
    </button>
  );
};

export default SubmitButton;
