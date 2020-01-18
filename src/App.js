import React, { Component } from 'react';
import GetData from './components/GetData/GetData';
import Solution from './containers/Solution/Solution';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ThreeAnim from './components/ThreeAnim/ThreeAnim';

class App extends Component {

  render() {
    return (
        <div className="App">
          <BrowserRouter>

          <Switch>
            {/* <GetData />
            <Solution /> */}
            <Route path="/" exact component={GetData} />
            <Route path="/main" exact component={GetData} />

            <Route path="/sol" exact component={Solution} />
            <Route path="/sim" exact component={ThreeAnim} />

          </Switch>
          </BrowserRouter>

        </div>
    );
  }
}

export default App;
