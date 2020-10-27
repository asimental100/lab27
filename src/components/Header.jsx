import { Link } from 'react-router-dom';
import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <h1>20 Hey Arnold! Characters</h1>
      </nav>
    );
  }
}
