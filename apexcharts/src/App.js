import React from "react";
import { GlobalStyled } from "./GlobalStyled";
import Router from "./Router";
import GlobalState from "./context/GlobalState";

const App = () => {
  return (
      <GlobalState>
        <GlobalStyled />
        <Router />
      </GlobalState>
  )
}

export default App;
