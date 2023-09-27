import { useState, createContext } from "react";
import styled from 'styled-components'

import './Container.css'
import SmallText from "../components/texts/SmallText";
import ThemeSwitchButton from "../components/buttons/ThemeSwitchButton";


export const ThemeContext = createContext(null)

const Container = () => {
  const [theme, setTheme] = useState('dark')
  console.log('theme in container: ' + theme)

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
        <SmallText />
        {/* <RegularText/>
        <BigText /> */}
      </div>
    </ThemeContext.Provider>
  );
};

export default Container;

