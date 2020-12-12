import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/header/nav";
import Home from "./pages/home";
import GetStarted from "./pages/getstarted";
import Team from "./pages/team";
import Footer from "./components/footer/Footer";

function MainRouter() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/getstarted" component={GetStarted} />
        <Route exact path="/team" component={Team} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default MainRouter;
