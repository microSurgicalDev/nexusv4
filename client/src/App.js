import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Layout from "./components/Layout/Layout";
import ButtonBases from "./components/LandingPage/LandingPage";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation>
          <Layout />
          <ButtonBases />
        </Navigation>
      </div>
    );
  }
}

export default App;
