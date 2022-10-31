import React from "react";
import Title from "./Title";
import Particles from "./Particles";
import { useLocation, useHistory } from "react-router-dom";

const Home = () => {
  const sampleLocation = useLocation();
  console.log(sampleLocation);
  console.log(window.location.pathname);
  console.log(sampleLocation.pathname === '/');

  // let history = useHistory();
  // if (sampleLocation.pathname != '/' || sampleLocation.pathname != '/#') {
  //   history.push('/');
  // }

  return (
    <>
      <Title />
      <Particles />
    </>
  );
};

export default Home;
