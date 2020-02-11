import React from "react";

import "./App.css";

import { Menu } from "./components/Menu.js";
import { PocList } from "./components/PocList.js";
import { PocPortfolio } from "./components/PocPortfolio.js";

function App() {
  return (
    <div className="App">
      <header />
      <body>
        <Menu />
        <PocPortfolio />
      </body>
    </div>
  );
}

export default App;
