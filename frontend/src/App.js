import React, { Component } from 'react';
import './App.css';
import Navbar from "./layout/Navbar";
import Users from "./components/user/Users";
import SignUp from "./components/user/SignUp";
import EditUser from "./components/user/EditUser";
import NotFound from "./pages/NotFound";
import Homepage from "./components/Homepage";
import Contribute from "./pages/Contribute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from '@material-ui/core';


class App extends Component {
  render() {
    return (
      <Router>
        <Navbar title="User App 2" />

        <Grid container justify="center" alignItems="center">
            <Grid lg={10} item >
              <Switch>
                <Route exact path="/" component={Homepage}></Route>
                <Route exact path="/users" component={Users}></Route>
                <Route exact path="/signUp" component={SignUp}></Route>
                <Route exact path="/github" component={Contribute}></Route>
                <Route exact path="/edit/:id" component={EditUser}></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </Grid>
          </Grid>

      </Router>
    )
  }
}

export default App;
