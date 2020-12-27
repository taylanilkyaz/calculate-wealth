import React, { Component } from "react";
import "./App.css";
import Navbar from "./layout/Navbar";
import { Users } from "./user/ui/users";
import { SignUp }  from "./auth/ui/sign-up";
import { EditUser } from "./user/ui/edit";
import NotFound from "./pages/NotFound";
import Homepage from "./components/Homepage";
import Contribute from "./pages/Contribute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar title="User App 2" />

        <Grid container justify="center" alignItems="center">
          <Switch>
            <Route exact path="/" component={Homepage}></Route>
            <Route exact path="/users" component={Users}></Route>
            <Route exact path="/signUp" component={SignUp}></Route>
            <Route exact path="/github" component={Contribute}></Route>
            <Route exact path="/edit/:id" component={EditUser}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </Grid>
      </Router>
    );
  }
}

export default App;
