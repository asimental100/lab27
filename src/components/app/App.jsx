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
          <Route 
            path="/" 
            exact
            render={(routerProps) => <ListOfCharacters {...routerProps} />} 
          />
          <Route 
            path="/detail/:id"
            exact
            render={(routerProps) => <DetailPage {...routerProps} />} 
          />
        </Switch>
      </Router>
    </>
  );
}
