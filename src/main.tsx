import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./types/global";
import { defaultTheme } from "./types/index";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Sobre from "./pages/Sobre";


ReactDOM.render(
  <ThemeProvider theme={defaultTheme}>
    <React.StrictMode>
          <Menu />
          <GlobalStyles /> 
          {/* <Home /> */}
          <Sobre />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);