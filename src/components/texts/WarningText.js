import { useContext } from "react";
import { ThemeContext } from "../../containers/Container";
import "./text.css";
import "../../helpers/colours.css";

const WarningText = ({ mainAlert, text }) => {
  const theme = useContext(ThemeContext);
  const warningTextTheme = "warning-text-" + theme;

  return (
    <div className={`${warningTextTheme} warning-text`}>
      
      <p><strong>{mainAlert}</strong>{text}</p>
    </div>
  );
};

export default WarningText;
