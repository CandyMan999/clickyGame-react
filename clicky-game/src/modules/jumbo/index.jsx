import React, { Component } from "react";

const Jumbo = props => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">Clicky Game</h1>
      {props.score === 0 && props.topScore !== 0 ? (
        <h3>You lost Loser</h3>
      ) : (
        <p className="lead">
          Choose as many cards in a row without picking the same card twice!!
        </p>
      )}
    </div>
  </div>
);

export default Jumbo;
