import React, { Component } from 'react';

import styles from './Styles.js';

export class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		};
	}
	render() {
		return (
			<nav class="navbar navbar-expand-md bg-dark navbar-dark">
				<a class="navbar-brand" style={styles.brand} href="#">
					Pokedex
				</a>

				<button
					class="navbar-toggler"
					onClick={() => {
						this.setState({ show: !this.state.show })
					}}
					type="button"
					data-toggle="collapse"
					data-target="#collapsibleNavbar"
				>
					<span class="navbar-toggler-icon" />
				</button>

				<div className={`collapse ${this.state.show? "show": ""} navbar-collapse`} id="collapsibleNavbar">
					<ul class="navbar-nav">
						<li class="nav-item">
							<a class="nav-link" style={styles.item} href="#">
								Главная страница
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" style={styles.item} href="#">
								Пойманные покемоны
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
