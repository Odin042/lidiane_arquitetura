import Menu from "./components/Menu";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./types/global";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./types";

ReactDOM.render(
  <ThemeProvider theme={defaultTheme}>
    <React.StrictMode>
      <BrowserRouter>
        <Menu />
        <GlobalStyles />
        <Router />
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
