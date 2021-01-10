import React, { useState, useEffect } from "react";
import "./App.css";
import { Navbar } from "./common-components/ui/navbar";
import { Users } from "./user/ui/users";
import { SignUp } from "./auth/ui/sign-up";
import { EditUser } from "./user/ui/edit";
import { Login } from "./auth/ui/login";
import { NotFound } from "./common-components/ui/page-not-found";
import { Homepage } from "./common-components/ui/homepage";
import { ContactUs } from "./common-components/ui/contact-us";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Grid } from "@material-ui/core";
import UserContext from "./context";

import { AdminPrivateRoute } from "./middleware/AdminPrivateRoute";
import { PublicRoute } from "./middleware/PublicRoute";
import { CustomerPrivateRoute } from "./middleware/CustomerPrivateRoute";

import { Wealths } from "./wealth/ui/wealths";
import { tokenIsValidRequest } from "./auth/services/use-auth-service";


export const App = () => {

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      tokenIsValidRequest()
        .then(res => {
          setUserData({
            user: res.data.user,
          });
        });
    }
    checkLoggedIn();
  }, []);
  return (
    <Router>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Navbar title="User App 2" />
        <Grid container justify="center" alignItems="center">
          <Switch>

            <AdminPrivateRoute exact userData={userData} path="/users" component={Users}></AdminPrivateRoute>
            <AdminPrivateRoute exact userData={userData} path="/edit/:id" component={EditUser}></AdminPrivateRoute>

            <CustomerPrivateRoute exact userData={userData} path="/wealths" component={Wealths}></CustomerPrivateRoute>


            <PublicRoute exact userData={userData} path="/github" component={ContactUs}></PublicRoute>
            <PublicRoute exact path="/signup" component={SignUp}></PublicRoute>
            <PublicRoute exact path="/" component={Homepage}></PublicRoute>
            <PublicRoute exact path="/login" component={Login}></PublicRoute>
            <PublicRoute exact component={NotFound}></PublicRoute>

          </Switch>
        </Grid>
      </UserContext.Provider>
    </Router>
  );

}

export default App;
