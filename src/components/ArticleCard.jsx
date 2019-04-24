import React from "react";
import { daysBetween } from "./utils";
import { Card } from "react-bootstrap";
import { Link } from "@reach/router";
import PropTypes from "prop-types";

const ArticleCard = props => {
  const {
    article: {
      author,
      title,
      topic,
      created_at,
      votes,
      comment_count,
      article_id
    }
  } = props;
  const days = daysBetween(new Date(), new Date(created_at));
  return (
    <Card>
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
        <Card.Text>Comments: {comment_count}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        {days + " " + (days === 1 ? "day ago" : "days ago")}
      </Card.Footer>
    </Card>
  );
};

ArticleCard.propTypes = {};

export default ArticleCard;
