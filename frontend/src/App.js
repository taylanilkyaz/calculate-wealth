import React, { Component } from 'react';
import './App.css';
import Navbar from "./layout/Navbar";
import Users from "./components/user/Users";
import AddUser from "./components/user/AddUser";
import UpdateUser from "./components/user/UpdateUser";
import NotFound from "./pages/NotFound";
import Homepage from "./components/Homepage";
import Contribute from "./pages/Contribute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar title="User App 2" />
          <Switch>
            <Route exact path="/" component={Homepage}></Route>
            <Route exact path="/users" component={Users}></Route>
            <Route exact path="/addUser" component={AddUser}></Route>
            <Route exact path="/github" component={Contribute}></Route>
            <Route exact path="/edit/:id" component={UpdateUser}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
