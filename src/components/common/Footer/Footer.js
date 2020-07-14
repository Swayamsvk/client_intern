import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <h4>About us</h4>
            <p>
              Nextlevelbot is Simple and Technical Bot For Stock & Crypto
              Trading. Nextlevelbot Supported Indian NSE, BSE, MCX, OPTION,
              FUTURE, BITCOIN, and CRYPTO. We are Always Working to Make it More
              Enhance
            </p>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4>More Link</h4>
            <ul>
              <li>Comunity Web</li>
              <li>Youtube Channel</li>
              <li>Indicator Request</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4>About Links</h4>
            <ul>
              <li>Affilate Program</li>
              <li>Privacy Policy</li>
              <li>Term Of condition</li>
              <li>Cookies Policy</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4>CONTACT US</h4>
            <ul>
              <li>↓ Telegram ↓</li>
              <li>Group: Nextlevelbot Group</li>
              <li>Channel: NextLevelBot Channel</li>
              <li>Phone: +91-98739-47912</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} NEXTLEVELBOT - ALL Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
