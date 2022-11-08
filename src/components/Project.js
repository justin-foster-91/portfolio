import React from 'react';
import { useLocation, useHistory, Switch, Route } from "react-router-dom";
import Stopwatch from '../Projects/Stopwatch/Stopwatch';
import Clock from '../Projects/Clock/Clock';

function Project(props) {
  // const location = useLocation();
  // console.log(location);
  // console.log(location.pathname.match('[^/]+$')[0]);

  return (
    <>
      <Switch>
        {/* <Route path='/portfolio'>
          <Route exact path='/stopwatch' component={Stopwatch}/>
          <Route exact path='/clock' component={Clock}/>
        </Route> */}

        {/* <Route exact path='/portfolio/stopwatch' component={Stopwatch}/>
        <Route exact path='/portfolio/clock' component={Clock}/> */}

        <Route render={() => <h1>404: page not found</h1>} />
      </Switch>
    </>
  );
}

export default Project;