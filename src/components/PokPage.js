import React from 'react';

import * as data from '../db.json';

import './PokPage.css';

import pokPicture1 from '../pokemons/1.png';

export function PokPage() {
	return (
		<React.Fragment>
			<div className="card-deck-wrapper" className="pokDeckWr">
				<div className="card-deck">
					<div className="divImg">
						<img src={pokPicture1} className="pokImg" alt="Card image" />
					</div>

					<div  className="card divInf">
						<p className="pokName">ID: {data.pokemons[0].id}</p>
						<p className="pokName">Name: {data.pokemons[0].name}</p>
						<p className="pokName">Status: not caught</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
