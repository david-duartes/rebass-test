import React from "react";
import PropTypes from 'prop-types'
import { dark, light } from "../../styles/theme/Theme";
import Theme from "./Theme";

const ThemeContainer = ({ setTheme }) => {
  const handleThemeChange = (e) => {
    const themeSelected = e.target.value;
    if (themeSelected === "light") {
      setTheme(light)
    } else {
      setTheme(dark);
    }
  };

  return <Theme handleThemeChange={handleThemeChange} />;
};

ThemeContainer.propTypes = {
  setTheme: PropTypes.func.isRequired
}

export default ThemeContainer;


