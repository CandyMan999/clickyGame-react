import React, { Component } from "react";

const Jumbo = props => (
  <div
    style={{
      borderTop: "solid 1px magenta",
      borderBottom: "solid 1px magenta"
    }}
    className="jumbotron jumbotron-fluid"
  >
    <div className="container">
      <h1
        style={{ fontFamily: "Dancing Script" }}
        className="display-4 font-effect-neon"
      >
        Clicky Game
      </h1>
      {props.score === 0 && props.topScore !== 0 ? (
        <h3 className="font-effect-shadow-multiple">
          You Lost Loser!!{" "}
          {props.pastScore ? (
            <p style={{ fontSize: "20px" }}>
              Congrats!!! {props.pastScore} is the NEW HIGH SCORE!!
            </p>
          ) : (
            <p style={{ fontSize: "10px" }}>pick agian to start over</p>
          )}
        </h3>
      ) : (
        <p className="lead font-effect-shadow-multiple">
          Choose as many cards in a row without picking the same card twice!!
        </p>
      )}
    </div>
  </div>
);

export default Jumbo;
