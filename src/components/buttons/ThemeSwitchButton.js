import { useContext } from "react";
import { moon,sun } from "../../helpers/icon";
import { ThemeContext } from "../../containers/Container";
import "./ThemeSwitchButton.css"
import SmallText from "../texts/SmallText";

const ThemeSwitchButton = ({ switchTheme }) => {
    const theme = useContext(ThemeContext)
    const buttonText = theme === "dark" ? "Light Theme" : "Dark Theme"
    const buttonBackground = "button-" + theme
    console.log(buttonBackground);
   

    return (  
        <>
            <button onClick={switchTheme} className={"switch-button " + buttonBackground} >
                {theme === 'dark' ? sun : moon}
                <SmallText text={buttonText} />
            </button>
        </>
    );
}
 
export default ThemeSwitchButton;