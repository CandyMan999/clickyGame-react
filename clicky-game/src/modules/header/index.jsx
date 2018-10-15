import React, { Component } from "react";

const Header = props => {
  return (
    <nav
      style={{ color: "mediumaquamarine", backgroundColor: "red !important" }}
      className="navbar font-effect-shadow-multiple "
    >
      Score:{" "}
      <span className="badge badge-pill badge-secondary">{props.score}</span>
      TopScore:{" "}
      <span className="badge badge-pill badge-secondary">{props.topScore}</span>
    </nav>
  );
};

export default Header;
