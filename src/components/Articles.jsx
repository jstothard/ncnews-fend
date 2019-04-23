import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "@reach/router";
import { daysBetween } from "./utils";

class Articles extends Component {
  state = {
    articles: [
      {
        author: "weegembump",
        title: "Seafood substitutions are increasing",
        article_id: 33,
        topic: "cooking",
        created_at: "2018-05-30T00:00:00.000Z",
        votes: 0,
        comment_count: "6"
      },
      {
        author: "happyamy2016",
        title: "High Altitude Cooking",
        article_id: 28,
        topic: "cooking",
        created_at: "2018-05-27T00:00:00.000Z",
        votes: 0,
        comment_count: "5"
      },
      {
        author: "jessjelly",
        title:
          "Twice-Baked Butternut Squash Is the Thanksgiving Side Dish of Your Dreams",
        article_id: 30,
        topic: "cooking",
        created_at: "2018-05-06T00:00:00.000Z",
        votes: 0,
        comment_count: "8"
      },
      {
        author: "weegembump",
        title:
          "What does Jose Mourinho's handwriting say about his personality?",
        article_id: 13,
        topic: "football",
        created_at: "2018-04-16T00:00:00.000Z",
        votes: 0,
        comment_count: "6"
      },
      {
        author: "grumpy19",
        title:
          "The People Tracking Every Touch, Pass And Tackle in the World Cup",
        article_id: 18,
        topic: "football",
        created_at: "2018-03-28T00:00:00.000Z",
        votes: 0,
        comment_count: "8"
      }
    ]
  };
  render() {
    const { articles } = this.state;
    return (
      <div>
        {articles.map(article => this.createArticleCard({ ...article }))}
      </div>
    );
  }

  createArticleCard = ({
    author,
    title,
    topic,
    created_at,
    votes,
    comment_count,
    article_id
  }) => {
    const days = daysBetween(new Date(), new Date(created_at));
    return (
      <div className="Article" key={article_id}>
        <Card className="text-center">
          <Card.Header>
            Topic:
            <Link to={`/topics/${topic}`}>
              {topic[0].toUpperCase() + topic.slice(1)}
            </Link>
            {" Posted by " + author}
          </Card.Header>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>Votes: {votes}</Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">
            {days + " " + (days === 1 ? "day ago" : "days ago")}
          </Card.Footer>
        </Card>
      </div>
    );
  };
}

Articles.propTypes = {};

export default Articles;
