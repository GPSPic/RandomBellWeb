import { useContext } from "react";
import { ThemeContext } from "../../containers/Container";
import './text.css'
import "../../helpers/colours.css"

const RegularText = ({text}) => {
    const theme = useContext(ThemeContext)
    const textTheme = 'text-' + theme

    return ( 
        <p className={textTheme + " regular-text"}>{text}</p>
     );
}
 
export default RegularText;