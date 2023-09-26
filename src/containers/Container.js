import { useState } from "react";
import SmallText from "../components/texts/SmallText";

const Container = () => {
      const [darkTheme, setDarkTheme] = useState(false)
  return (
    <>
              <SmallText darkTheme={darkTheme} />
    </>
  );
};

export default Container;
