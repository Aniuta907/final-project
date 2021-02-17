import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './PokemonCard.css';

export class PokemonCard extends Component {
	render() {
	const { pokemon, onClick, saveCurrent, currentTheme } = this.props;
	const { name, picture, caught, id } = pokemon;
	return (
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
					<button className={ currentTheme === 'dark' ? 'btn darkBtn' : 'btn lightBtn' } disabled={caught} onClick={(event) => onClick(id)}>
						Catch
					</button>
				</div>
			</div>
	);
	}
}
