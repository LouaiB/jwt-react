import React from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Header';
import About from './About';
import Weather from './Weather';
import Login from './Login';
import Test from './Test';
import '../helpers/AxiosInterceptors';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/weather">
          <Weather />
        </Route>
        <Route path="/">
          <Weather />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
