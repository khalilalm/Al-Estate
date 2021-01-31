import React from "react";
import NavigationBar from "./NavigationBar/nav.js";
import Home from "./Home/Home.js";
import Listings from "./Listings/listing.js";
import Realtors from "./Realtors/realtors.js";
import Edit from "./Edit/edit.js";
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Listings" component={Listings} />
          <Route path="/Realtors" component={Realtors} />
          <Route path="/edit/:id" component={Edit} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
