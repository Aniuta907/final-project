import React from 'react';
import { Link } from 'react-router-dom';

import './PokemonCard.css';

export function PokemonCard({ pokemon, onClick, saveCurrent }) {
	const { name, picture, caught, id } = pokemon;
	return (
		<React.Fragment>
			<div className="card pokCard">
				<div className="card card-block text-center">
					<Link to={'/pokemon'} onClick={(event) => saveCurrent(id)}>
						Pokemon info
					</Link>
				</div>

				<div className="card card-block text-center">
					<img src={picture} className="pokImg" alt="Card-img" />
					<p className="pokName card-text">
						name: {name}
					</p>
					<button className="btn btn-primary" disabled={caught} onClick={(event) => onClick(id)}>
						Catch
					</button>
				</div>
			</div>
		</React.Fragment>
	);
}
