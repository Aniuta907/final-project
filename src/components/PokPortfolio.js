import React from 'react';

import * as data from '../db.json';

import './PokPortfolio.css';

import pokPicture1 from '../pokemons/1.png';
import pokPicture2 from '../pokemons/2.png';
import pokPicture3 from '../pokemons/3.png';

export function PokPortfolio() {
	return (
		<React.Fragment>
			<div class="card-deck-wrapper" className="pokDeckWr">
				<div class="card-deck">
					<div class="card" className="pokCard">
						<div class="card card-block text-center">
							<a href="#" class="card-link" class="card-header">
								Pokemon
							</a>
						</div>

						<div class="card card-block text-center">
							<img src={pokPicture1} className="pokImg" alt="Card image" />
							<p class="card-text" className="pokName">
								name: {data.pokemons[0].name}
							</p>
							<a href="#" class="btn btn-primary">
								Catch
							</a>
						</div>
					</div>

					<div class="card" className="pokCard">
						<div class="card card-block text-center">
							<a href="#" class="card-link" class="card-header">
								Pokemon
							</a>
						</div>

						<div class="card card-block text-center">
							<img src={pokPicture2} className="pokImg" alt="Card image" />
							<p class="card-text" className="pokName">
								name: {data.pokemons[1].name}
							</p>
							<a href="#" class="btn btn-primary">
								Catch
							</a>
						</div>
					</div>

					<div class="card" className="pokCard">
						<div class="card card-block text-center">
							<a href="#" class="card-link" class="card-header">
								Pokemon
							</a>
						</div>

						<div class="card card-block text-center">
							<img src={pokPicture3} className="pokImg" alt="Card image" />
							<p class="card-text" className="pokName">
								name: {data.pokemons[2].name}
							</p>
							<a href="#" class="btn btn-primary">
								Catch
							</a>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
