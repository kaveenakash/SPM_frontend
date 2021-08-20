import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../components/ui/Header";
import Home from "./home/Home";
import PropertyDetail from "./property/PropertyDetail";
import PropertyPage from "./property/PropertyPage";
import Footer from "./ui/Footer";
import VehicleDetail from './vehicle/VehicleDetail';
import VehiclePage from './vehicle/VehiclePage';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/property/:id">
          <PropertyDetail />
        </Route>
        <Route exact path="/property">
          <PropertyPage />
        </Route>

        <Route path="/vehicle/:id">
            <VehicleDetail/>
        </Route>
        <Route path="/vehicle">
            <VehiclePage/>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
