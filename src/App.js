import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// CSS
import './CSS/Animista.css';
import './CSS/Carousel.css';
import './CSS/Polaroid.css';
import './CSS/Paper.css';
import './CSS/IndexCard.css';
import './CSS/Post-It.css';

// Components
import Nav from './Components/Nav';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Stack from './Components/Stack';
import ContactMe from './Components/ContactMe';

// Background image
const background = {
  backgroundImage: `url(${require("./images/background/background.jpg")})`,
  width: '100vw',
  height: '100vh',
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
  overflow: 'auto',
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App' style={background}>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/AboutMe' component={AboutMe}></Route>
            <Route exact path='/Projects' component={Projects}></Route>
            <Route exact path='/Stack' component={Stack}></Route>
            <Route exact path='/ContactMe' component={ContactMe}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;