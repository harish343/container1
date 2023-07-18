import React from "react";
import ReactDOM from "react-dom";
import Header from "header/Header";

import Cartadder from "cart/Cartadder"
import Responseapi from"cart/Responseapi"
import { StoreProvider, useStore } from "./store/Store";
import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header/>
    <Cartadder/>
    <Responseapi/>
    
  </div>
);
ReactDOM.render(
  <StoreProvider>
<App /></StoreProvider>, document.getElementById("app"));
