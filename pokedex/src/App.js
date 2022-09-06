import React from "react";
import GlobalState from "./global/GlobalState";
import Router from "./routes/Router";
import { GlobalStyle } from "./style";

function App() {
  return (
    <>
      <GlobalStyle />

      <GlobalState>
        <Router />
      </GlobalState>

    </>
  );
}

export default App;
