import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

class nav extends Component {
  state = {};


  render() {
    return (
      <div className="nav-wrapper">
        <nav className="nav-content">
          <ul>
            <ul>
              <li className="nav-title" style={{"font":"italic 1.2em Fira Sans, serif"}}>
                <strong>AL-ESTATE</strong>
              </li>
            </ul>
            <div className="line"></div>
            <Link to="/" >
              <li className="nav-link">Home</li>
            </Link>
            <Link to="/Listings">
              <li className="nav-link">Listings</li>
            </Link>
            <Link to="/Realtors">
              <li className="nav-link"> Realtors</li>
            </Link>
            
          </ul>
          <div className="line"></div>
        </nav>
      </div>
    );
  }
}

export default nav;
