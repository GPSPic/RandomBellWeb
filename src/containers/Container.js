import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import "./Container.css";
import HomePage from "../components/HomePage/HomePage";
import PageNotFound from "../components/PageNotFound";
import About from "../components/HomePage/About";
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
    <div className={`${containerThemeClass} container-box`}>
      <ThemeContext.Provider value={theme}>
        <Router>
          <div className="headerMain-box">
            <Header switchTheme={switchTheme} />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/setRoutine" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </ThemeContext.Provider>
    </div>
  );
};

export default Container;
