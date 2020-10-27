/* eslint-disable max-len */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DetailPage from '../DetailsPage';
import ListOfCharacters from '../CharactersList';
import Header from '../Header';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" render={(routerProps) => <ListOfCharacters {...routerProps} />} />
          <Route exact path="/detail/:id" render={(routerProps) => <DetailPage {...routerProps} />} />
        </Switch>
      </Router>
    </>
  );
}
