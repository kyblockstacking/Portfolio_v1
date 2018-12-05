import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Nav from './Components/Nav';

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
        </div>
      </Router>
    );
  }
}

export default App;