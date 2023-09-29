import { Link } from "react-router-dom";
import SmallText from "../texts/SmallText";
import ThemeSwitchButton from "../buttons/ThemeSwitchButton";
import "./Menu.css"

const Header = ({switchTheme}) => {
  return (
    <>
      <header>
        <Link to="/">
          <SmallText text="Link to Home" className="home-link"/>
          <ThemeSwitchButton switchTheme={switchTheme} className="theme-switch"/>
        </Link>
      </header>
    </>
  );
};

export default Header;
