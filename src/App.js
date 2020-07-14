import React, { Component } from "react";
import Navbar from "./components/common/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideDrawer from "./components/common/Navbar/SideDrawer";
import BackDrop from "./components/common/Navbar/Backdrop";
import Footer from "./components/common/Footer/Footer";
import Hello from "./components/Hello";
import "./App.css";

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="page-container">
        <div className="content-wrap">
          <Router>
            <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}
            <div className="App"></div>
            <Hello />
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
