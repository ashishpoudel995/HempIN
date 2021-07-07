import React from "react";
import CompanyLogo from "./images/logo.png";
import { Link } from "react-router-dom";
import { Component } from "react";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <header style={{ zIndex: 10, width: "100%" }}>
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/" style={{ marginLeft: "7.5%" }}>
              <img src={CompanyLogo} alt="HempIN" style={{ height: "15vh" }} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav ml-auto" style={{ marginRight: "10%" }}>
                <li className="nav-item" style={{ fontWeight: "800" }}>
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item" style={{ fontWeight: "800" }}>
                  <Link className="nav-link" to="/HempIN/products">
                    Products
                  </Link>
                </li>
                <li className="nav-item" style={{ fontWeight: "800" }}>
                  <Link className="nav-link" to="/ourteam">
                    Our Team
                  </Link>
                </li>
                <li className="nav-item" style={{ fontWeight: "800" }}>
                  <Link className="nav-link" to="/contact-us">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default NavigationBar;
