import { Formik } from "formik";
import * as yup from "yup";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Form, Button } from "react-bootstrap";
import { postComment } from "./api";

class PostComment extends Component {
  state = {
    isPosting: false,
    isPosted: false
  };
  render() {
    const { user } = this.props;
    const { isPosted, isPosting } = this.state;
    const schema = yup.object({
      message: yup
        .string()
        .max(40000, "Maximum of 40,000 characters")
        .min(15, "Please enter a longer message")
        .required()
    });
    return (
      <div>
        <Card>
          <Card.Header>Post a comment</Card.Header>
          <Card.Body>
            {user.username ? (
              isPosted ? (
                <p>Thank you, your comment has been posted</p>
              ) : (
                <Formik validationSchema={schema} onSubmit={this.sendComment}>
                  {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                      <Form.Group controlId="message">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows="9"
                          required
                          name="message"
                          value={values.message}
                          onChange={handleChange}
                          isValid={touched.message && !errors.message}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Button type="submit" disabled={isPosting}>
                        Submit
                      </Button>
                    </Form>
                  )}
                </Formik>
              )
            ) : (
              <p>Please login to post a comment</p>
            )}
          </Card.Body>
        </Card>
      </div>
    );
  }

  sendComment = ({ message }) => {
    const { user, article_id } = this.props;
    this.setState({ isPosting: true });
    postComment(article_id, user, message).then(() =>
      this.setState({ isPosting: false, isPosted: true })
    );
  };
}

PostComment.propTypes = {};

export default PostComment;
