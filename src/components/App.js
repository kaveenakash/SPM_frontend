import React, { Fragment,useState } from "react";
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
import Login from './Login/Login'
import BusinessPage from './business&services/BusinessPage'
import ElectronicPage from '../components/electronic/ElectronicPage'
import Register from "./Register/Register";
import ErrorModel from "./reusable/NotificationModal";
import SuccessfulModel from "./reusable/SuccessfulModel";
import Profile from '../components/profile/Profile'

function App() {
  const [loginData,setLoginData] = useState(null)
  const logOut = () =>{
    setLoginData(null)
  }
  console.log(loginData)
  return (
    <Router>
      <Header loginData={loginData} logOut={logOut} />
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
        <Route path="/services">
          <BusinessPage />
        </Route>
        <Route path="/electronic">
          <ElectronicPage />
        </Route>
        <Route path="/login">
          <Login setLoginData={setLoginData}/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/successful">
          <SuccessfulModel/>
        </Route>
        <Route path="/user-profile">
          <Profile loginData={loginData} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
