import React, { Component } from "react";
import PropTypes from "prop-types";
import ArticleCard from "./ArticleCard";
import { getArticle } from "./api";
import { Spinner } from "react-bootstrap";
import Comments from "./Comments";
import { navigate } from "@reach/router";

class Article extends Component {
  state = {
    article: {},
    isLoading: true
  };
  render() {
    const { article, isLoading } = this.state;
    const { user, comment } = this.props;
    return (
      <div>
        {isLoading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <div>
            <ArticleCard article={article} user={user} />
            <Comments
              article_id={article.article_id}
              user={user}
              comment={comment}
            />
          </div>
        )}
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticle();
  }

  fetchArticle = () => {
    const { article_id } = this.props;
    getArticle(article_id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(() => navigate("/404"), { replace: true });
  };
}

Article.propTypes = {};

export default Article;
