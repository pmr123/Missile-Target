import React, { Component } from 'react';
import GetData from './components/GetData/GetData';
import Solution from './containers/Solution/Solution';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            {/* <GetData />
            <Solution /> */}
            <Route path="/" exact component={GetData} />
            <Route path="/sol" exact component={Solution} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
