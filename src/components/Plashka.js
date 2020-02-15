import React from "react";

import './Plashka.css';

export function Plashka({ name, pic }) {
  return (
		<React.Fragment>
    <div className="card card-block text-center">
      <a href="#" className="card-link" className="card-header">
        Pokemon
      </a>
    </div>

    <div className="card card-block text-center">
      <img src={pic} className="pokImg" alt="Card image" />
      <p class="card-text" className="pokName card-text">
        name: {name}
      </p>
      <a href="#" className="btn btn-primary">
        Catch
      </a>

</div>
</React.Fragment>);
}
