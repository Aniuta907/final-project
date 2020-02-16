import React from 'react';

import './PokPage.css';

export function PokPage({ pokemon }) {
	const { name, picture, caught, id } = pokemon; // потрошим покемона из пропсов на переменные
	console.log('caught', caught);
	return (
		<React.Fragment>
			<div className="card-deck-wrapper" className="pokDeckWr">
				<div className="card-deck">
					<div className="divImg">
						<img src={picture} className="pokImg" alt="Card image" />
					</div>

					<div className="card divInf">
						<p className="pokName">ID: {id}</p>
						<p className="pokName">Name: {name}</p>
						<p className="pokName">Status: {caught ? 'is caught' : 'is free'}</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
