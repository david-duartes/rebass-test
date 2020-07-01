import React from "react";
import { ThemeProvider } from "emotion-theming";
// import theme from "@rebass/preset";
import theme from "@rebass/preset-material";

const Theme = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default Theme;
