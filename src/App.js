import React from "react";
import Navbar from "./components/common/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="App"></div>
    </Router>
  );
};

export default App;
