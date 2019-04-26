import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentCard from "./CommentCard";
import { CardColumns } from "react-bootstrap";
import { getComments, deleteComment } from "./api";
import { isObject } from "util";
import _ from "lodash";

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

  componentDidUpdate(prevProps, prevState) {
    const newComment = !_.isEqual(prevProps.comment, this.props.comment);
    if (newComment) this.pushComment(this.props.comment);
  }

  removeComment = ({ target }) => {
    const value = Number(target.value | target.parentNode.value);
    const { comments } = this.state;
    const newComments = comments.filter(comment => {
      return comment.comment_id !== value;
    });
    deleteComment(value).then(() => {
      this.setState({
        comments: newComments
      });
    });
  };

  pushComment = comment => {
    const newComments = [comment].concat(this.state.comments);
    this.setState({ comments: newComments });
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
