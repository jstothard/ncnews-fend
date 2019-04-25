import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { daysBetween } from "./utils";
import PropTypes from "prop-types";
import Votes from "./Votes";

const CommentCard = props => {
  const { author, created_at, votes, comment_id, body } = props.comment;
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
                <Votes votes={votes} id={comment_id} content="comments" />
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
