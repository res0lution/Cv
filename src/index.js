import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import Particles from "react-particles-js";

import CvContainer from "./components/Cv-container";
import "./styles/styles.scss";

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

const renderApp = (Component) => {
  render(
    <AppContainer>
      <>
      <Particles className="particles" params={particlesOptions} />
      <CvContainer />
      </>
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
