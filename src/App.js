import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Nav from './Components/Nav';
import Home from './Components/Home';
import GitHub from './Components/GitHub';
import Projects from './Components/Projects';
import Information from './Components/Information';

const background = {
  backgroundImage: 'url("./images/background3.jpg")',
  width: '100%',
  height: '100vh',
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App' style={background}>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/GitHub' component={GitHub}></Route>
            <Route exact path='/Projects' component={Projects}></Route>
            <Route exact path='/LinkedIn' component={Information}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;