import React from "react";

import "./SideDrawer.css";

const sideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Price</a>
        </li>
        <li>
          <a href="#">Syntax</a>
        </li>
        <li>
          <a href="#">Aliceblue Symbol</a>
        </li>
        <li>
          <a href="#">Videos</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
        <li>
          <a href="#">Log in</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
