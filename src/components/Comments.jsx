import React, { Component } from "react";
import CommentCard from "./CommentCard";
import { CardColumns } from "react-bootstrap";
import { getComments, deleteComment } from "../api";
import PageNumbers from "./PageNumbers";

class Comments extends Component {
  state = {
    comments: [],
    page: 0
  };
  render() {
    const { comments, page } = this.state;
    const { user, article } = this.props;
    const totalPages = Math.ceil(Number(article.comment_count) / 10);
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
        <PageNumbers
          page={page}
          totalPages={totalPages}
          changePage={this.changePage}
        />
      </div>
    );
  }
  componentDidMount() {
    this.fetchComments();
  }

  componentDidUpdate(prevProps, prevState) {
    const newComment = prevProps.comment !== this.props.comment;
    if (newComment) this.pushComment(this.props.comment);
  }

  changePage = ({ target }) => {
    const value = target.attributes.value
      ? target.attributes.value.value
      : target.parentNode.attributes.value.value;
    this.setState({ page: Number(value) });
  };

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
    const {
      article: { article_id, page }
    } = this.props;
    getComments(article_id, page).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  };
}

export default Comments;
