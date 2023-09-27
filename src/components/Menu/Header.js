import { Link } from "react-router-dom";
import SmallText from "../texts/SmallText";
import ThemeSwitchButton from "../buttons/ThemeSwitchButton";

const Header = ({switchTheme}) => {
  return (
    <>
      <header>
        <Link to="/">
          <SmallText text="Link to Home" />
          <ThemeSwitchButton switchTheme={switchTheme}/>
        </Link>
      </header>
    </>
  );
};

export default Header;
