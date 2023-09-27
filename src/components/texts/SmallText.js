import styled from 'styled-components';
import { defaultDarkText, defaultBrightText } from "../../helpers/colours.js";


const SmallText = () => {

  return (
    <h5 color='white'>Small Text</h5>
  );
};

export default SmallText;

  // const Small = styled.h5`
  //   color: ${function(props) {return props['data-darktheme'] ? defaultDarkText : defaultBrightText}};
  //   font-size: 32px;
  // `

  //     <Small data-darktheme={darkTheme}>Small Text</Small>
