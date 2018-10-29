import React, { Component } from 'react';

import HomepageLayout from './components/HomepageLayout';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomepageLayout signup={this.props.signup} />
      </div>
    );
  }
}

export default App;
