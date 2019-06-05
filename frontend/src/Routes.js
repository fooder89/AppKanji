import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import Index from "./components/Index/Index";
import Register from "./components/Register/Register";
import Test from "./components/Test/Test";
import NotFound from "./components/Main/404";
import AppliedRoute from "./components/AppliedRoute";

export default ({ childProps }) =>
  <BrowserRouter>
    <Switch>
        <AppliedRoute path="/" exact component={Index} props={childProps}/>
		<AppliedRoute path="/login" exact component={Login} props={childProps}/>
		<AppliedRoute path="/register" exact component={Register} props={childProps}/>
        <AppliedRoute path="/main" exact component={Main} props={childProps}/>
		  <AppliedRoute path="/test" exact component={Test} props={childProps}/>
        <Route component={NotFound} />
    </Switch>
  </BrowserRouter>