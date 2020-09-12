import { Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global/GlobalStyles";
import { light } from "../styles/theme/Theme";
import ThemeContainer from "./theme/ThemeContainer";
import SignupForm from "./forms/SignupForm";

const App = () => {
  const [theme, setTheme] = useState(light);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Grid container>
        <Grid item xs={6}>
          <Box
            display="flex"
            alignItems="center"
            height="8vh"
            px={2}
            bgcolor={theme.colors.primary}
            color={theme.colors.secundary}
          >
            <h1>Test</h1>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            display="flex"
            height="100%"
            alignItems="center"
            justifyContent="flex-end"
            px={2}
            bgcolor={theme.colors.primary}
            color={theme.colors.secundary}
          >
            <ThemeContainer setTheme={setTheme} />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            display="flex"
            height="92vh"
            alignItems="center"
            justifyContent="center"
            px={2}
          >
            <SignupForm />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
