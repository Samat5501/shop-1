import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import About from './components/About';
import EmptyPage from './components/EmptyPage';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Main from './Main';


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
            <Main />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </div>
      </Switch>
      </Router>
  );
}

export default App;