import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Landing />
        <Switch>
          {/* <Route exact path="/">
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
