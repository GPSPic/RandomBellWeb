import { useContext } from "react";
import SmallText from "../texts/SmallText";
import { ThemeContext } from "../../containers/Container";

const DayButton = ({ day }) => {
      const theme = useContext(ThemeContext);
      const buttonBackground = "button-" + theme
      const handleClick = (e) => {
            e.preventDefault()
            
      }
  return (
    <button className={`${day}` + "-button day-button "+ buttonBackground} onClick={handleClick}>
      <div className="button-sizer">
        <SmallText text={day[0].toUpperCase() + day[1] + day[2]} />
      </div>
    </button>
  );
};

export default DayButton;
