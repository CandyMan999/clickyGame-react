import React, { Component } from "react";

const Footer = () => (
  <footer
    style={{
      backgroundColor: "#e9ecef",
      borderTop: "solid 1px magenta",
      borderBottom: "solid 1px magenta"
    }}
    className="footer text-center"
  >
    <div className="container">
      <span className="text-muted">Powered By React </span>
      <img alt="icon" src="./favicon.ico" />
    </div>
  </footer>
);

export default Footer;
