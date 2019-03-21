import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Menu from './components/Menu';
import About from './containers/About';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/' exact render={() => <Menu />} />
        <Route path='/about' render={() => <About />} />
      </Router>
    );
  }
}

export default App;
