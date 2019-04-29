import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Votes from "./Votes";
import moment from "moment";
import { Link } from "@reach/router";

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
                <Link to={`/users/${author}`}>{author}</Link>
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
                {
                  <Votes
                    votes={votes}
                    id={comment_id}
                    content="comments"
                    username={username}
                    removeComment={removeComment}
                    author={author}
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

export default CommentCard;
