import React from "react";
import ReactDOM from "react-dom";
import Cartadder from "./component/Cartadder"
import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">

  <Cartadder/>

  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
