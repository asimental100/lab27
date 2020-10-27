/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { fetchCharacter, fetchGif } from '../utils/fetch.js';
import styles from '../App.css';

export default class DetailsPage extends Component {
  state = {
    details: {},
    gif: {}
  }

  componentDidMount = async() => {
    const nonexistentDetails = await fetchCharacter(this.props.match.params.id);
    console.log(nonexistentDetails);
    this.setState({ details: nonexistentDetails });

    const randomGif = await fetchGif();
    console.log(randomGif[0]);
    this.setState({ gif: randomGif[0] });
  }

  render() {
    const { details, gif } = this.state;
    return (
      <div className={styles.detailedCharacter}>
        <h1>{details.name}</h1>
        <img src={details.image} alt={details.name}/>
        <p>Details: The Hey Arnold API does not have any actual details about the characters.
          So here is a random Hey Arnold gif</p>
        <img src={gif.gifLink} alt={details.name} />
      </div>
    );
  }
}
