import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentCard from "./CommentCard";
import { CardColumns } from "react-bootstrap";
import { getComments, deleteComment } from "./api";

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    const { comments } = this.state;
    const { user } = this.props;
    return (
      <div>
        <p className="font-weight-bold">Comments</p>
        <CardColumns>
          {comments.map(comment => (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              user={user}
              removeComment={this.removeComment}
            />
          ))}
        </CardColumns>
      </div>
    );
  }
  componentDidMount() {
    this.fetchComments();
  }

  removeComment = ({ target: { value } }) => {
    const { comments } = this.state;
    deleteComment(value).then(() => {
      // this.setState({
      //   comments: comments.filter(comment => comment.comment_id !== value)
      // });
      this.fetchComments();
    });
  };

  fetchComments = () => {
    const { article_id } = this.props;
    getComments(article_id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  };
}

Comments.propTypes = {};

export default Comments;
