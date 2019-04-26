import React from "react";
import { daysBetween } from "./utils";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "@reach/router";
import PropTypes from "prop-types";
import Votes from "./Votes";

const ArticleCard = props => {
  const {
    article: {
      author,
      title,
      topic,
      created_at,
      votes,
      comment_count,
      article_id,
      body
    },
    user
  } = props;
  const days = daysBetween(new Date(), new Date(created_at));
  const username = user ? user.username : null;
  return (
    <Card>
      <Card.Header>
        <Container>
          <Row>
            <Col>
              <Card.Text>
                Topic:
                <Link to={`/topics/${topic}`}>
                  {topic[0].toUpperCase() + topic.slice(1)}
                </Link>
              </Card.Text>
            </Col>
            <Col>
              <Card.Text className="font-weight-light text-right">
                {" Posted by " + author}
              </Card.Text>
            </Col>
          </Row>
        </Container>
      </Card.Header>
      <Card.Body>
        <Container>
          <Row>
            <Col xs={{ span: false }}>
              {
                <Votes
                  votes={votes}
                  id={article_id}
                  content="articles"
                  username={username}
                />
              }
            </Col>
            <Col xs={{ span: true }}>
              <Link className="text-dark" to={`/articles/${article_id}`}>
                <Card.Title>{title}</Card.Title>
              </Link>
              <Card.Text>{body}</Card.Text>
            </Col>
          </Row>
        </Container>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Container>
          <Row>
            <Col>{days}</Col>
            <Col>
              <Card.Text className="text-right">
                Comments: {comment_count}
              </Card.Text>
            </Col>
          </Row>
        </Container>
      </Card.Footer>
    </Card>
  );
};

ArticleCard.propTypes = {};

export default ArticleCard;
