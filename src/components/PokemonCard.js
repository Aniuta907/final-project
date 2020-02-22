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
					{name}
					</Link>
				</div>

				<div className="card card-block text-center">
					<div>
						<img src={picture} className="pokImg" alt="Card-img" />
					</div>
					<button className="btn btn-primary" disabled={caught} onClick={(event) => onClick(id)}>
						Catch
					</button>
				</div>
			</div>
		</React.Fragment>
	);
}
