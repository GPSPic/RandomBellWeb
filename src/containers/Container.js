import { useState, createContext } from "react";
import styled from 'styled-components'

import './Container.css'
import SmallText from "../components/texts/SmallText";
import RegularText from "../components/texts/RegularText";
import LargeText from "../components/texts/LargeText";
import ThemeSwitchButton from "../components/buttons/ThemeSwitchButton";


export const ThemeContext = createContext(null)

const Container = () => {
  const [theme, setTheme] = useState('dark')

  const containerThemeClass = "container-" + theme

  const switchTheme = function () {
    if (theme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
 
  }
  return (
    <ThemeContext.Provider value={theme}>
      <div className={containerThemeClass}>
        <ThemeSwitchButton switchTheme = {switchTheme} />
        <SmallText text={"whazzzzzuuuuup"}/>
        <RegularText text={"whazzzzzuuuuup"}/>
        <LargeText text={"whazzzzzuuuuup"}/> 
      </div>
    </ThemeContext.Provider>
  );
};

export default Container;

