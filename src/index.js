import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";

import CvContainer from "./components/cv-container";
import "./styles/styles.scss";
import "./images/photo.png";

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
  module.hot.accept("./components/cv-container", () => {
    renderApp(CvContainer);
  });
}
