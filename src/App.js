import React, { Component } from 'react';

import HomepageLayout from './components/HomepageLayout';
import './App.css';

class App extends Component {
  render() {
    const { appKey, signup } = this.props;
    return (
      <div className="App">
        <HomepageLayout appKey={appKey} signup={signup} />
      </div>
    );
  }
}

export default App;
