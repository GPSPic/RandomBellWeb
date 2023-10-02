import { useContext } from "react";
import { ThemeContext } from "../../containers/Container";
import './text.css'
import "../../helpers/colours.css"

const SmallText = ({text}) => {
  const theme = useContext(ThemeContext)
  const textTheme = 'text-' + theme

  return (
    <p className={`${textTheme} small-text`}>{text}</p>
  );
};

export default SmallText;

// import styled from 'styled-components';

// import { defaultDarkText, defaultBrightText } from "../../helpers/colours.js";

  // const Small = styled.h5`
  //   color: ${function(props) {return props['data-darktheme'] ? defaultDarkText : defaultBrightText}};
  //   font-size: 32px;
  // `

  //     <Small data-darktheme={darkTheme}>Small Text</Small>
