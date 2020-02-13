import React from "react";


import styles from "./Styles.js";

export function Menu() {
  return (
<nav class="navbar navbar-expand-md bg-dark navbar-dark">

  <a class="navbar-brand" style={styles.brand} href="#">Pokedex</a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" style={styles.item} href="#">Главная страница</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" style={styles.item} href="#">Страница покемона</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" style={styles.item} href="#">Пойманные покемоны</a>
      </li>
    </ul>
  </div>
</nav>

  );
}
