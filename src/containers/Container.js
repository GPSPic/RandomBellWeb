import { useState } from "react";
import styled from 'styled-components'

import './Container.css'
import SmallText from "../components/texts/SmallText";
import ThemeSwitchButton from "../components/buttons/ThemeSwitchButton";


const Container = () => {
  const [darkTheme, setDarkTheme] = useState(true)

  const containerClass = "darktheme-" + darkTheme.toString() 

  const switchTheme = function () {
    setDarkTheme(!darkTheme)
  }
  return (
    <div className={containerClass}>
      <ThemeSwitchButton switchTheme = {switchTheme} darkTheme={darkTheme}/>
      <SmallText darkTheme={darkTheme} />
    </div>
  );
};

export default Container;

