import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { daysBetween } from "./utils";
import PropTypes from "prop-types";
import Votes from "./Votes";

const CommentCard = props => {
  const {
    comment: { author, created_at, votes, comment_id, body },
    user,
    removeComment
  } = props;
  const username = user ? user.username : null;
  const days = daysBetween(new Date(), new Date(created_at));

  return (
    <div>
      <Card>
        <Card.Header>
          <Container>
            <Row>
              <Col>
                <Card.Text>{author}</Card.Text>
              </Col>
              <Col>
                <Card.Text className="font-weight-light text-right">
                  {days}
                </Card.Text>
              </Col>
            </Row>
          </Container>
        </Card.Header>
        <Card.Body>
          <Container>
            <Row>
              <Col xs={{ span: false }}>
                {username === author ? (
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={removeComment}
                    value={comment_id}
                  >
                    <span
                      className="glyphicon glyphicon-remove"
                      aria-hidden="true"
                      value={comment_id}
                    />
                  </Button>
                ) : null}
                {
                  <Votes
                    votes={votes}
                    id={comment_id}
                    content="comments"
                    username={username}
                  />
                }
              </Col>
              <Col xs={{ span: true }}>{body}</Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
};

CommentCard.propTypes = {};

export default CommentCard;
