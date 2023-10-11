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

  const [randomTimes, setRandomTimes] = useState({});

  const [routineSettings, setRoutineSettings] = useState({
    startTime: "08:00",
    endTime: "20:00",
    ringNum: 0,
    minInterval: "00:30",
    daysSelected: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
    },
  });

  const containerThemeClass = "container-" + theme;

  const handleSubmitRandomTimes = (timesObject) => {
    setRandomTimes(timesObject);
  };

  const handleStartTimeChange = (timeValue) => {
    setRoutineSettings({ ...routineSettings, startTime: timeValue });
  };
  const handleEndTimeChange = (timeValue) => {
    setRoutineSettings({ ...routineSettings, endTime: timeValue });
  };

  const handleRingNumChange = (num) => {
    setRoutineSettings({ ...routineSettings, ringNum: num });
  };

  const handleMinIntChange = (interval) => {
    setRoutineSettings({ ...routineSettings, minInterval: interval });
  };

  const handleSelectedDay = (dayValue) => {
    const newDaysSelected = { ...routineSettings.daysSelected };
    newDaysSelected[dayValue] = !routineSettings.daysSelected[dayValue];
    setRoutineSettings({ ...routineSettings, daysSelected: newDaysSelected });
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
                    routineSettings={routineSettings}
                    handleStartTimeChange={handleStartTimeChange}
                    handleEndTimeChange={handleEndTimeChange}
                    handleRingNumChange={handleRingNumChange}
                    handleMinIntChange={handleMinIntChange}
                    handleSelectedDay={handleSelectedDay}
                    handleSubmitRandomTimes={handleSubmitRandomTimes}
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
