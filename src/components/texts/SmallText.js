import styled from 'styled-components';
import { defaultDarkText, defaultBrightText } from "../../helpers/colours.js";

const Small = styled.h5`
  color: ${function(props) {return props['data-darktheme'] ? defaultDarkText : defaultBrightText}};
  font-size: 32px;
`

const SmallText = ({ darkTheme }) => {

  return (
    <Small data-darktheme={darkTheme}>Small Text</Small>
  );
};

export default SmallText;
