import React, { Component } from "react";
import Navbar from "./components/common/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideDrawer from "./components/common/Navbar/SideDrawer";
import BackDrop from "./components/common/Navbar/Backdrop";

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
      <Router>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <div className="App"></div>
      </Router>
    );
  }
}

export default App;
