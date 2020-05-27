import React from "react";

import { Link } from "react-router-dom";

import "./Menu.css";

class Menu extends React.Component {
  render() {
    return (
      <div className="top-container">
        <div className="menu-item"><Link to="/">about</Link></div>
        <div className="menu-item"><Link to="/projects">projects</Link></div>
        <div className="menu-item"><a href="https://github.com/joon-ko">github</a></div>
      </div>
    );
  }
}

export default Menu;