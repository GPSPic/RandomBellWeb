import { Link } from "react-router-dom";
import RegularText from "../texts/RegularText";
import ThemeSwitchButton from "../buttons/ThemeSwitchButton";
import "./Menu.css";

const Header = ({ switchTheme }) => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <RegularText text="Home" className="home-link" />
              </Link>
            </li>
            <li>
              <Link to="/setRoutine">
                <RegularText text="Set Routine" />
              </Link>
            </li>
          </ul>
        </nav>
        <ThemeSwitchButton switchTheme={switchTheme} className="theme-switch" />
      </header>
    </>
  );
};

export default Header;
