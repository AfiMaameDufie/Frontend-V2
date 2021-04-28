import React from "react";
import { Switch, Route } from "react-router-dom";
import ForgotPassword from "../components/login/forgotPassword";
import LandingPage from "../components/portal/landingPage";
import DashBoard from "../components/portal/dashboard";
import PrivateRoute from "./privateRoutes";
import Login from "../components/login/login";
import Register from "../components/login/register";
import StepperApp from "../components/portal/StepperApp";


const PublicRoutes = (props) => {
  return (
    <Switch>
      <Route exact={true} path="/" component={Login} />
      <Route exact={true} path="/register" component={Register} />
      <Route exact={true} path="/recover" component={ForgotPassword} />
      <Route exact={true} path="/form" component={DashBoard} />
      <Route exact={true} path="/tracker" component={StepperApp} />
      <Route exact={true} path="/apply" component={LandingPage} />
      <PrivateRoute path="/apply" component={LandingPage} />
    </Switch>
  );
};

export default PublicRoutes;
