import { Link } from "react-router-dom";
import SmallText from "../texts/SmallText";

const Footer = () => {
  return (
    <>
      <footer>
        <Link to="/about">
          <SmallText text="Link to About" />
        </Link>
      </footer>
    </>
  );
};

export default Footer;
