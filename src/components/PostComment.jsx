import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Form, Button } from "react-bootstrap";

class PostComment extends Component {
  render() {
    const { topics, users } = this.props;
    return (
      <div>
        <Card>
          <Card.Header>Post a comment</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group controlId="topic">
                <Form.Label>Topic</Form.Label>
                <Form.Control as="select">
                  {topics.map(({ slug }) => (
                    <option key={slug} value={slug}>
                      {slug[0].toUpperCase() + slug.slice(1)}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="message">
                <Form.Label>Comment</Form.Label>
                <Form.Control as="textarea" rows="9" />
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

PostComment.propTypes = {};

export default PostComment;
