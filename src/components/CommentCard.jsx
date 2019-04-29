import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import Votes from "./Votes";
import moment from "moment";

const CommentCard = props => {
  const {
    comment: { author, created_at, votes, comment_id, body },
    user,
    removeComment
  } = props;
  const username = user ? user.username : null;
  const days = Math.abs(moment().diff(created_at) < 1000 * 60 * 60 * 24)
    ? "Today"
    : moment(created_at).fromNow();

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
