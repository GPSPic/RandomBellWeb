import { Link } from "react-router-dom";
import SmallText from "../texts/SmallText";
import './Menu.css'

const Footer = () => {
  return (
    <>
      <footer>
        <Link to="/about">
          <SmallText text="About" />
        </Link>
      </footer>
    </>
  );
};

export default Footer;
