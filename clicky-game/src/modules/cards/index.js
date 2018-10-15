import React, { Component } from "react";

class Cards extends Component {
  state = {};

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: "5%"
        }}
      >
        {this.props.characters.map(character => (
          <div
            className="card"
            style={{
              width: "80px",
              marginBottom: "2%",
              border: "solid 1px magenta"
            }}
            value={character.id}
            key={character.id}
            onClick={() => this.props.grabId(character.id)}
          >
            <img
              style={{
                width: "70px",
                height: "100px"
              }}
              className="card-img-top"
              src={character.image}
              alt="Card cap"
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Cards;
