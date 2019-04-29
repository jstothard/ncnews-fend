import React, { Component } from "react";
import { Card, Tabs, Tab } from "react-bootstrap";
import { getArticles } from "../api";
import TopTable from "./TopTable";

class Stats extends Component {
  state = {
    articles: [],
    key: "votes"
  };

  render() {
    const { articles, key } = this.state;
    return (
      <Card>
        <Card.Header>Trending Articles</Card.Header>
        <Card.Body>
          <Tabs
            id="featured-tabs"
            activeKey={key}
            onSelect={key => this.setState({ key })}
          >
            <Tab eventKey="votes" title="Votes">
              <TopTable articles={articles} sortCol={key} />
            </Tab>
            <Tab eventKey="comment_count" title="Comments">
              <TopTable articles={articles} sortCol={key} />
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const topicUpdate = prevProps.topic !== this.props.topic;
    const userUpdate = prevProps.username !== this.props.username;
    const keyUpdate = prevState.key !== this.state.key;
    if (topicUpdate || userUpdate || keyUpdate) this.fetchArticles();
  }

  fetchArticles = () => {
    const { topic, username } = this.props;
    const { key } = this.state;
    getArticles(topic, { [key]: "desc" }, 0, username).then(({ articles }) => {
      this.setState({ articles });
    });
  };
}

export default Stats;
