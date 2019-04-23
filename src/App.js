import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Side from "./components/Side";

class App extends Component {
  state = {
    topics: [
      { slug: "coding", description: "Code is love, code is life" },
      { slug: "football", description: "FOOTIE!" },
      {
        slug: "cooking",
        description: "Hey good looking, what you got cooking?"
      }
    ]
  };

  render() {
    const { topics } = this.state;
    return (
      <div className="App">
        <Navigation topics={topics} />
        <Main />
        <Side />
      </div>
    );
  }
}

export default App;
