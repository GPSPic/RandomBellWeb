import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBell}from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../../containers/Container";
const Bell = () => {
      const theme = useContext(ThemeContext)
      return <>
            <button>
            <FontAwesomeIcon icon={faBell} style={{color: "#FFFFFF",}} />
      </button>
      </>;
};

export default Bell;
