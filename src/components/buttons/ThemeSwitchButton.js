import { useContext } from "react";
import { moon,sun } from "../../helpers/icon";
import { ThemeContext } from "../../containers/Container";

const ThemeSwitchButton = ({ switchTheme }) => {
    const theme = useContext(ThemeContext)
    console.log(theme)
    const buttonTheme = 'button-' + theme;

    return (  
        <>
            <button onClick={switchTheme} className="buttonTheme">
                {theme === 'dark' ? sun : moon}
            </button>
        </>
    );
}
 
export default ThemeSwitchButton;