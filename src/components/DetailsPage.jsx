/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { fetchCharacter } from '../utils/fetch.js';
import styles from '../App.css';

export default class DetailsPage extends Component {
  state = {
    details: {}
  }

  componentDidMount = async() => {
    const nonexistentDetails = await fetchCharacter(this.props.match.params.id);
    this.setState({ details: nonexistentDetails });
  }

  render() {
    const { details } = this.state;
    return (
      <div className={styles.detailedCharacter}>
        <h1>{details.name}</h1>
        <img src={details.image} alt={details.name}/>
        <p>Details: The Hey Arnold API does not have any actual details about the characters.</p>
      </div>
    );
  }
}
