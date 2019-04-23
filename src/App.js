import _ from "lodash";
import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation.jsx";
import Articles from "./components/Articles.jsx";
import Side from "./components/Side.jsx";
import { getTopics } from "./components/api";
import { Router } from "@reach/router";

class App extends Component {
  state = {
    topics: []
  };

  render() {
    const { topics } = this.state;
    return (
      <div className="App">
        <Navigation topics={topics} />
        <Router className="Main">
          <Articles path="/" />
        </Router>
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
