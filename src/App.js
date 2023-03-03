import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Stopwatch from './Projects/Stopwatch/Stopwatch';
import Clock from './Projects/Clock/Clock';

import "./App.css";

function App() {
  let history = useHistory();

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />

        <Route exact path="/contact" component={Contact} />

        <Route render={() => <h1>404: page not found</h1>} />
      </Switch>
    </>
  );
}

export default App;
