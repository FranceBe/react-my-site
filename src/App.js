import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import GlobalStyle from '../src/style';

import About from './containers/About';
import HomePage from "./containers/HomePage";

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <GlobalStyle />
          <Router>
            <Route path='/' exact render={() => <HomePage />} />
            <Route path='/about' render={() => <About />} />
          </Router>
        </React.Fragment>
    );
  }
}

export default App;
