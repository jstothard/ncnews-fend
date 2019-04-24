import _ from "lodash";
import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation.jsx";
import Articles from "./components/Articles.jsx";
import Side from "./components/Side.jsx";
import { getTopics } from "./components/api";
import { Router } from "@reach/router";
import { Container, Row, Col } from "react-bootstrap";
import { isEmpty } from "./components/utils";

class App extends Component {
  state = {
    topics: [],
    user: {}
  };

  render() {
    const { topics, user } = this.state;
    const loggedIn = !isEmpty(user);

    return (
      <div className="App">
        <Navigation
          topics={topics}
          updateUser={this.updateUser}
          loggedIn={loggedIn}
          user={user}
        />
        <div className="Body">
          <Container>
            <Row>
              <Col xs={12} md={12} lg={8}>
                <Router className="Main">
                  <Articles path="/" />
                  <Articles path="topics/:topic" />
                </Router>
              </Col>
              <Col xs={6} md={6} lg={4}>
                <Side />
              </Col>
            </Row>
          </Container>
        </div>
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

  updateUser = user => {
    this.setState({ user });
  };
}

export default App;
