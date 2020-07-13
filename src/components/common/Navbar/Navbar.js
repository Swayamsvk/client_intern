import React from "react";
import "./Navbar.css";
import DrawerToggleButton from "./DrawerToggleButton";
const Navbar = (props) => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            NEXTLEVELBOT
          </a>
          <div className="toolbar_toggle_item">
            <ul className="right hide-on-med-and-down">
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
                <a href="#" className="red">
                  Log in
                </a>
              </li>
            </ul>
          </div>
          <div className="toolbar_toggle_button">
            <DrawerToggleButton click={props.drawerClickHandler} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
