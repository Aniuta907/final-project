import React, { Component } from 'react';

import { store } from '../store/store';
import { getPokemonById } from '../actions/actions';

import './PokPage.css';

export class PokPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        store.dispatch(getPokemonById());
    }

    render() {
        const { name, picture, caught, id, caughtDate } = this.props.pokemon;
        return ( <
            React.Fragment >
            <
            div className = "card-deck-wrapper"
            className = "pokDeckWr" >
            <
            div className = "card-deck" >
            <
            div className = "divImg" >
            <
            img src = { picture }
            className = "pokImg"
            alt = "Card image" / >
            <
            /div>

            <
            div className = "card divInf" >
            <
            p className = "pokName" > ID: { id } < /p> <
            p className = "pokName" > Name: { name } < /p> <
            p className = "pokName" > Status: { caught ? 'is caught' : 'is free' } < /p> {
                caught ? < p className = "pokName" > Caught date : { caughtDate } < /p> : null} <
                    /div> <
                    /div> <
                    /div> <
                    /React.Fragment>
            );
        }
    }