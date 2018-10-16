import React from "react";

const Header = ({ score, topScore }) => (
  <nav
    style={{ color: "mediumaquamarine", backgroundColor: "red !important" }}
    className="navbar font-effect-shadow-multiple "
  >
    Score:{" "}
    <span className="badge badge-pill badge-secondary">{score || 0}</span>
    TopScore:{" "}
    <span className="badge badge-pill badge-secondary">{topScore}</span>
  </nav>
);

export default Header;
