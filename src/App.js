import React, { Component } from 'react';
import GetData from './containers/GetData/GetData';
import ThreeAnim from './components/ThreeAnim/ThreeAnim';

class App extends Component {

  

  render() {
    return (
      <div className="App">
        <GetData />
        <ThreeAnim />

      </div>
    );
  }
}

export default App;
