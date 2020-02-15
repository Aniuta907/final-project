import React from "react";

import './Plashka.css';

export function Plashka({ pokemon, onClick }) {
  const { name, picture, catched, id } = pokemon;
  return (
		<React.Fragment>
    <div class="card" className="card pokCard">
      <div className="card card-block text-center">
        <a href="#" className="card-link" className="card-header">
          Pokemon
        </a>
      </div>

      <div className="card card-block text-center">
        <img src={picture} className="pokImg" alt="Card image" />
        <p class="card-text" className="pokName card-text">
          name: {name}
        </p>
        <button className="btn btn-primary" disabled={catched} onClick={(event) => onClick(id)}>
          Catch
        </button>
      </div>
    </div>
</React.Fragment>);
}
