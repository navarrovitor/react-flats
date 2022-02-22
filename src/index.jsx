import React from "react";
import ReactDOM from "react-dom";

import "./Assets/application.scss";
import App from "./Components/App";

const root = document.getElementById("root");
if (root) {
  ReactDOM.render(<App />, root);
}
