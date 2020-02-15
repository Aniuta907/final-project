import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

import styles from './Styles.js';

export class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		};

		const menuOptions =this.props.menuOptions;
		const homeOption = menuOptions.pop();
		menuOptions.unshift(homeOption);
		this.menuOptions = menuOptions;
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
					{this.menuOptions.map(option => <li class="nav-item">
													<div class="nav-link" style={styles.item}>
														<Link to={option.path}>{option.name}</Link>
													</div>
												</li>)}
					</ul>
				</div>
			</nav>
		);
	}
}
