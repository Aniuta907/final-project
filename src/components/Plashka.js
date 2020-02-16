import React from 'react';
import { Link } from 'react-router-dom';

import './Plashka.css';

export function Plashka({ pokemon, onClick, saveCurrent }) {
	const { name, picture, caught, id } = pokemon; // потрошим покемона из пропсов на переменные
	return (
		<React.Fragment>
			<div class="card" className="card pokCard">
				<div className="card card-block text-center">
					<Link to={'/pokemon'} onClick={(event) => saveCurrent(id)}>
						Pokemon info
					</Link>
				</div>

				<div className="card card-block text-center">
					<img src={picture} className="pokImg" alt="Card image" />
					<p class="card-text" className="pokName card-text">
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
