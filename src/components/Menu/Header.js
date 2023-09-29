import { Link } from "react-router-dom";
import SmallText from "../texts/SmallText";
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
                <SmallText text="Home" className="home-link" />
              </Link>
            </li>
            <li>
              <Link to="/about">
                <SmallText text="About" />
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
