import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Styles.js';

export class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		};

		const menuOptions = this.props.menuOptions;
		this.menuOptions = menuOptions;
	}
	render() {
		return (
			<nav className="navbar navbar-expand-md bg-dark navbar-dark">
				<span className="navbar-brand" style={styles.brand}>
					Pokedex
				</span>

				<button
					className="navbar-toggler"
					onClick={() => {
						this.setState({ show: !this.state.show });
					}}
					type="button"
					data-toggle="collapse"
					data-target="#collapsibleNavbar"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className={`collapse ${this.state.show ? 'show' : ''} navbar-collapse`} id="collapsibleNavbar">
					<ul className="navbar-nav">
						{this.menuOptions.map((option, index) => (
							<li key={index} className="nav-item">
								<div className="nav-link" style={styles.item}>
									<Link to={option.path}>{option.name}</Link>
								</div>
							</li>
						))}
					</ul>
				</div>
			</nav>
		);
	}
}
