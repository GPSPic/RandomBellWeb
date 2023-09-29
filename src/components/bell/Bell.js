import { useContext } from "react";
import { ThemeContext } from "../../containers/Container";
import RegularText from "../texts/RegularText";
import "./Bell.css"
import { bellDark, bellLight } from "../../helpers/icon"

const Bell = () => {
  const theme = useContext(ThemeContext);
  const bellButtonTheme = "bell-button-" + theme 

  return (
    <div className="bell-box">
      <button className={`${bellButtonTheme} bell-button`}>
            {theme === 'dark' ? bellDark : bellLight}
      </button>
    </div>
  );
};

export default Bell;
