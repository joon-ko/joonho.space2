import React from "react";
import "./Menu.css";

class Menu extends React.Component {
  render() {
    return (
      <div className="top-container">
        <div className="menu-item">about</div>
        <div className="menu-item">projects</div>
        <div className="menu-item">blog</div>
        <div className="menu-item">github</div>
      </div>
    );
  }
}

export default Menu;