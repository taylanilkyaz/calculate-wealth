import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import './App.css';
import User from "./components/User"

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar title="User App 2" />
        <hr />
        <User
          name="Taylan İlkyaz"
          
          salary="5000" />
        <User
          name="Ayşe Akcan İlkyaz"
          department="software"
          salary="5000" />
      </div>
    )
  }
}

export default App;
