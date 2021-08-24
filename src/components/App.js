import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../components/ui/Header";
import Home from "./home/Home";
import PropertyDetail from "./property/PropertyDetail";
import PropertyPage from "./property/PropertyPage";
import Footer from "./ui/Footer";
import VehicleDetail from "./vehicle/VehicleDetail";
import VehiclePage from "./vehicle/VehiclePage";
import VehicleAddForm from "./vehicle/form/VehicleAddForm";
import PropertyAddForm from "./property/form/PropertyAddForm";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/property/add-form">
          <PropertyAddForm />
        </Route>
        <Route exact path="/property/:id">
          <PropertyDetail />
        </Route>
        <Route exact path="/property">
          <PropertyPage />
        </Route>
        <Route path="/vehicle/add-form">
          <VehicleAddForm />
        </Route>
        <Route exact path="/vehicle/:id">
          <VehicleDetail />
        </Route>
        <Route path="/vehicle">
          <VehiclePage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
