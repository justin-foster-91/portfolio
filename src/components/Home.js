import React from "react";
import Title from "./Title";
import Particles from "./Particles";
import { useLocation, useHistory } from "react-router-dom";

const Home = () => {
  const sampleLocation = useLocation();

  let history = useHistory();
  if (sampleLocation.pathname !== '/') {
    history.push('/');
  }

  return (
    <>
      <Title />
      <Particles />
    </>
  );
};

export default Home;
