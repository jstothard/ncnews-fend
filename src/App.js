import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation.jsx";
import Main from "./components/Main.jsx";
import Side from "./components/Side.jsx";
import { getTopics } from "./components/api";

import _ from "lodash";

class App extends Component {
  state = {
    topics: []
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

  componentDidMount() {
    this.fetchTopics();
  }

  componentDidUpdate(prevProps, prevState) {
    const topicsUpdated = !_.isEqual(prevState.topics, this.state.topics);
    if (topicsUpdated) this.fetchTopics();
  }

  fetchTopics = () => {
    getTopics().then(topics => {
      this.setState({
        topics
      });
    });
  };
}

export default App;
