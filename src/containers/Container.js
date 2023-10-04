import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";

import "./Container.css";
import "../helpers/colours.css";
import HomePage from "../components/HomePage/HomePage";
import PageNotFound from "../components/PageNotFound";
import About from "../components/HomePage/About";
import Footer from "../components/Menu/Footer";
import Header from "../components/Menu/Header";
import SetRoutine from "../components/SetRoutine/SetRoutine";

export const ThemeContext = createContext(null);

const Container = () => {
  const [theme, setTheme] = useState("dark");
  const [startTime, setStartTime] = useState("08:00");
  const [endTime, setEndTime] = useState("20:00");
  const [ringNum, setRingNum] = useState(0);
  const [minInterval, setMinInterval] = useState("00:30");
  const [daysSelected, setDaysSelected] = useState({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  });
  const containerThemeClass = "container-" + theme;

  const handleStartTimeChange = (timeValue) => {
    setStartTime(timeValue);
  };
  const handleEndTimeChange = (timeValue) => {
    setEndTime(timeValue);
  };

  const handleRingNumChange = (num) => {
    setRingNum(num);
  };

  const handleMinIntChange = (interval) => {
    setMinInterval(interval);
  };

  const handleSelectedDay = (dayValue) => {
    const newDaysSelected = { ...daysSelected };
    newDaysSelected[dayValue] = !daysSelected[dayValue];
    setDaysSelected(newDaysSelected);
  };

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
              <Route
                path="/setRoutine"
                element={
                  <SetRoutine
                    startTime={startTime}
                    endTime={endTime}
                    ringNum={ringNum}
                    minInterval={minInterval}
                    daysSelected={daysSelected}
                    handleStartTimeChange={handleStartTimeChange}
                    handleEndTimeChange={handleEndTimeChange}
                    handleRingNumChange={handleRingNumChange}
                    handleMinIntChange={handleMinIntChange}
                    handleSelectedDay={handleSelectedDay}
                  />
                }
              />
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
