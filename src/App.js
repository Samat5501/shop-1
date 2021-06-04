import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Card from './Card/Card';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PhoneList from './components/PhoneList';
import SinglePhoneList from './components/SinglePages';
// import Main from './Main'; 

function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <div className="App">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product">
            {/* <Main /> */}
            <PhoneList/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/phone/:name">
            <SinglePhoneList/>
          </Route>
          <Route path='/cart'>
            <Card/>
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;