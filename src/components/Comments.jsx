import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentCard from "./CommentCard";
import { CardColumns } from "react-bootstrap";
import { getComments } from "./api";

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    const { comments } = this.state;
    return (
      <div>
        <p className="font-weight-bold">Comments</p>
        <CardColumns>
          {comments.map(comment => (
            <CommentCard key={comment.comment_id} comment={comment} />
          ))}
        </CardColumns>
      </div>
    );
  }
  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    const { article_id } = this.props;
    getComments(article_id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  };
}

Comments.propTypes = {};

export default Comments;
