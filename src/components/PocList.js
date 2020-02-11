import React from "react";

import { Plashka } from "./Plashka.js";

import * as data from "../db.json";

export function PocList() {
  return (
    <ul>
      {data.pokemons.slice(0, 9).map(function(item) {
        return <Plashka>{item.name}</Plashka>;
      })}
    </ul>
  );
}
