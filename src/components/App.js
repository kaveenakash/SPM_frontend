import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../components/ui/Header";
import Home from "./home/Home";
import Footer from "./ui/Footer";
import VehicleDetail from './vehicle/VehicleDetail';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/vehicle/:id">
            <VehicleDetail/>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
