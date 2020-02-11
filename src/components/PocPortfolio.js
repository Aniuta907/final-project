import React from "react";

import * as data from "../db.json";

import "./PocPortfolio.css";

export function PocPortfolio() {
  return (
    <React.Fragment>
      <img
        src="D:\projects\final-project\pokemons\1.png"
        className="pocImg"
      ></img>
      <p className="pocName">name: {data.pokemons[0].name}</p>
      <p>id: {data.pokemons[0].id}</p>
    </React.Fragment>
  );
}
