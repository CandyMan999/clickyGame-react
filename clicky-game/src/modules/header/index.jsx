import React, { Component } from "react";

const Header = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      Score:{" "}
      <span className="badge badge-pill badge-secondary">{props.score}</span>
      TopScore:{" "}
      <span className="badge badge-pill badge-secondary">{props.topScore}</span>
    </nav>
  );
};

export default Header;
