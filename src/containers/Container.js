import { useState } from "react";
import styled from 'styled-components'

import './Container.css'
import SmallText from "../components/texts/SmallText";


const Container = () => {
      const [darkTheme, setDarkTheme] = useState(true)
      // const trying = 

  return (
    <div className={"darktheme-" + darkTheme.toString()}>
      <SmallText darkTheme={darkTheme} />
    </div>
  );
};

export default Container;

