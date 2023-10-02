import { useContext } from "react";
import useSound from "use-sound";

import { ThemeContext } from "../../containers/Container";
import "./Bell.css";
import "../../helpers/colours.css"
import { bellDark, bellLight } from "../../helpers/icon";
import bellChime from "../../helpers/sounds/happy-bell.mp3";

const Bell = () => {
  const [play] = useSound(bellChime);

  const theme = useContext(ThemeContext);
  const bellButtonTheme = "bell-button-" + theme;

  return (
    <div className="bell-box">
      <button className={`${bellButtonTheme} bell-button`} onClick={play}>
        {theme === "dark" ? bellDark : bellLight}
        {/* <img scr="../../helpers/icons8-bell.gif"/> */}
      </button>
    </div>
  );
};

export default Bell;
