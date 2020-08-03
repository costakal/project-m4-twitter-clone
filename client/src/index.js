import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import CurrentUserProvider from "./components/CurrentUserContext";
import SocialsContextProvider from "./components/SocialsContext";

ReactDOM.render(
  <CurrentUserProvider>
    <SocialsContextProvider>
      <App />
    </SocialsContextProvider>
  </CurrentUserProvider>,
  document.getElementById("root")
);
