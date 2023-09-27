import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import styled from "styled-components";

import "./Container.css";
import SmallText from "../components/texts/SmallText";
import RegularText from "../components/texts/RegularText";
import LargeText from "../components/texts/LargeText";
import ThemeSwitchButton from "../components/buttons/ThemeSwitchButton";
import HomePage from "../components/HomePage/HomePage";
import PageNotFound from "../components/PageNotFound";
import About from "../components/Menu/About";
import Footer from "../components/Menu/Footer";
import Header from "../components/Menu/Header";

export const ThemeContext = createContext(null);

const Container = () => {
  const [theme, setTheme] = useState("dark");

  const containerThemeClass = "container-" + theme;

  const switchTheme = function () {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className={containerThemeClass}>
      <ThemeContext.Provider value={theme}>
        <Router>
          <Header switchTheme={switchTheme}/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeContext.Provider>
    </div>
  );
};

export default Container;
