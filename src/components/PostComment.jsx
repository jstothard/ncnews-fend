import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import React, { Component } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { postComment } from "../api";

class PostComment extends Component {
  state = {
    isPosting: false,
    isPosted: false
  };
  render() {
    const { user } = this.props;
    const { isPosted, isPosting } = this.state;
    const schema = yup.object({
      Comment: yup
        .string()
        .max(40000, "Maximum of 40,000 characters")
        .min(15, "Please enter a longer message")
        .required("Please enter a comment")
    });
    return (
      <div>
        <Card>
          <Card.Header>Post a comment</Card.Header>
          <Card.Body>
            {user.username ? (
              isPosted ? (
                <div>
                  <p>Thank you, your comment has been posted</p>
                  <Button onClick={this.newComment}>
                    Post another comment
                  </Button>
                </div>
              ) : (
                <Formik validationSchema={schema} onSubmit={this.sendComment}>
                  {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    errors
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                      <Form.Group controlId="Comment">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as="textarea"
                          name="Comment"
                          value={values.Comment}
                          rows="9"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isValid={touched.Comment && !errors.Comment}
                        />
                        <ErrorMessage name="Comment" />
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

  sendComment = ({ Comment }, { props, resetForm }) => {
    const { user, article_id, updateComment } = this.props;
    this.setState({ isPosting: true });
    postComment(article_id, user, Comment).then(comment => {
      this.setState({ isPosting: false, isPosted: true });
      console.log(comment);
      updateComment(comment);
      // resetForm();
    });
  };

  newComment = () => {
    this.setState({ isPosted: false });
  };
}

export default PostComment;
