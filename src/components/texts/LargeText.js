import { useContext } from "react";
import { ThemeContext } from "../../containers/Container";
import './text.css'

const LargeText = ({text}) => {
  const theme = useContext(ThemeContext)
  const textTheme = 'text-' + theme

  return (
    <p className={`${textTheme} large-text`}>{text}</p>
  );
};

export default LargeText;