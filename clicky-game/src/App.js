import React, { Component } from "react";
import Cards from "./modules/cards";
import Jumbo from "./modules/jumbo";
import Header from "./modules/header";
import Footer from "./modules/footer";
import CHARACTERS from "./friends";

class App extends Component {
  state = {
    characters: CHARACTERS,
    score: 0,
    topScore: 0,
    clickedId: []
  };

  clickedId = id => {
    if (this.state.clickedId.includes(id)) {
      console.log("you have already guessed me game over");
      if (this.state.score > this.state.topScore) {
        return this.setState({
          topScore: this.state.score,
          clickedId: [],
          score: 0
        });
      }
      return this.setState({ clickedId: [], score: 0 });
    } else {
      console.log("new round I am not in the array score+1");
      this.shuffleArray(CHARACTERS);

      return this.setState(({ clickedId, score }) => ({
        clickedId: [...clickedId, id],
        score: score + 1
      }));
    }
  };

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  render() {
    console.log(CHARACTERS);
    console.log("clicked ids ", this.state.clickedId, this.state.score);
    return (
      <div>
        <Header score={this.state.score} topScore={this.state.topScore} />
        <Jumbo score={this.state.score} topScore={this.state.topScore} />
        <Cards grabId={this.clickedId} characters={this.state.characters} />
        <Footer />
      </div>
    );
  }
}

export default App;
