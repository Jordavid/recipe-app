import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';

const App = () =>  {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch >
          <Route path='/' exact component={Home}/>  
          <Route path='/about' component={About}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
