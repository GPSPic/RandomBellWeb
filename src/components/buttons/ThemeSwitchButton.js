import { moon,sun } from "../../helpers/icon";
const ThemeSwitchButton = ({ switchTheme, darkTheme }) => {
    return (  
        <>
            <button onClick={switchTheme}>
                {darkTheme ? sun: moon }
            </button>
        </>
    );
}
 
export default ThemeSwitchButton;