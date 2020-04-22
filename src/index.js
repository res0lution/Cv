import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";

import CvContainer from "./components/Cv-container";
import "./styles/styles.scss";

const renderApp = (Component) => {
  render(
    <AppContainer>
      <CvContainer />
    </AppContainer>,
    document.querySelector("#loader")
  );
};

renderApp(CvContainer);

if (module.hot) {
  module.hot.accept("./components/Cv-container", () => {
    renderApp(CvContainer);
  });
}
