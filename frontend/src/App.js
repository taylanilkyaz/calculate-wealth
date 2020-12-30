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
import axios from "axios";
import UserContext from "./context";
import { AdminPrivateRoute } from "./middleware/AdminPrivateRoute";
import { PublicRoute } from "./middleware/PublicRoute";
import { CustomerPrivateRoute } from "./middleware/CustomerPrivateRoute";


export const App = () => {

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      const tokenRes = await axios.get("http://localhost:3001/auth/tokenIsValid", { withCredentials: true });
      if (tokenRes.data) {
        setUserData({
          user: tokenRes.data.user,
        });
      }
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
