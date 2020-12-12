import React from "react";
import Banner from "../components/homebody/banner";
import InfoCards from "../components/homebody/InfoCards";
import Sponsors from "../components/homebody/Sponsors";

const Home = (props) => {
  return (
    <React.Fragment>
      <Banner />
      <InfoCards />
      <Sponsors />
    </React.Fragment>
  );
};

export default Home;
