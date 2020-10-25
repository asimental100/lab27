/* eslint-disable max-len */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchCharacters } from '../utils/fetch.js';
import styles from '../App.css';

export default class CharactersList extends Component {
  state = {
    characters: []
  }

  componentDidMount = async() => {
    const characters = await fetchCharacters();
    
    this.setState({ characters });
  }

  render() {
    const { characters } = this.state;
    const characterElements = characters.map(character => (
      <Link to={`/detail/${character._id}`} key={character.name}>
        <li>
          <h1>{character.name}</h1>
          <img src={character.image} alt={character.name}/>
        </li>
      </Link>
    ));
    return (
      <div id={styles.characterContainer}>
        <ul id={styles.characterList}>
          {characterElements}
        </ul>
      </div>
    );
  }
}
