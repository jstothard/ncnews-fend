import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation.jsx";
import Articles from "./components/Articles.jsx";
import Article from "./components/Article.jsx";
import Side from "./components/Side.jsx";
import { getTopics } from "./api";
import { Router } from "@reach/router";
import { Container, Row, Col } from "react-bootstrap";
import { isEmpty } from "./utils";
import SortBar from "./components/SortBar";
import PostComment from "./components/PostComment";
import ErrorHandling from "./components/ErrorHandling";
import Stats from "./components/Stats";

class App extends Component {
  state = {
    topics: [],
    user: {},
    sort: { created_at: "desc" },
    comment: {}
  };

  render() {
    const { topics, user, sort, comment } = this.state;
    const loggedIn = !isEmpty(user);
    return (
      <div className="App">
        <div>
          <Navigation
            topics={topics}
            updateUser={this.updateUser}
            loggedIn={loggedIn}
            user={user}
          />
        </div>
        <div className="Page">
          <Router>
            <SortBar
              path="/topics/*"
              updateSort={this.updateSort}
              sort={sort}
            />
            <SortBar path="/" updateSort={this.updateSort} sort={sort} />
          </Router>
          <Container className="Body">
            <Row>
              <Col xs={12} md={12} lg={8}>
                <Router className="Main">
                  <Articles path="/" sort={sort} user={user} />
                  <Articles path="topics/:topic" sort={sort} user={user} />
                  <Articles path="users/:username" sort={sort} user={user} />
                  <Article
                    path="articles/:article_id"
                    user={user}
                    comment={comment}
                  />
                  <ErrorHandling default />
                </Router>
              </Col>
              <Col xs={12} md={12} lg={4}>
                <Router>
                  <PostComment
                    path="articles/:article_id"
                    user={user}
                    updateComment={this.updateComment}
                  />
                  <Stats path="/" />
                  <Stats path="/topics/:topic" />
                  <Stats path="/users/:username" />
                  <Side default />
                </Router>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }

  updateSort = e => {
    const order = { asc: "desc", desc: "asc" };
    const term = e.target.value;
    if (this.state.sort[term] !== undefined)
      this.setState({ sort: { [term]: order[this.state.sort[term]] } });
    else this.setState({ sort: { [term]: "desc" } });
  };

  componentDidMount() {
    this.fetchTopics();
    this.getLocalStorage();
  }

  fetchTopics = () => {
    getTopics().then(topics => {
      this.setState({
        topics
      });
    });
  };

  updateComment = comment => {
    this.setState({ comment });
  };

  updateUser = user => {
    if (user.username) {
      localStorage.setItem("user", JSON.stringify(user));
    } else localStorage.clear();
    this.setState({ user });
  };

  getLocalStorage = () => {
    if (localStorage.hasOwnProperty("user")) {
      this.setState({ user: JSON.parse(localStorage.getItem("user")) });
    }
  };
}

export default App;
