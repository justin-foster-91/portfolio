import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  let history = useHistory();

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />

        {/* <Route render={() => <h1>404: page not found</h1>} /> */}
      </Switch>
    </>
  );
}

export default App;
