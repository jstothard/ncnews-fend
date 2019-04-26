import "./css/Articles.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { CardColumns } from "react-bootstrap";
import ArticleCard from "./ArticleCard";
import { getArticles } from "./api";
import _ from "lodash";

class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    const { topic, user } = this.props;
    return (
      <div>
        {topic ? (
          <p className="display-4">{topic[0].toUpperCase() + topic.slice(1)}</p>
        ) : null}
        <CardColumns>
          {articles.map(article => (
            <ArticleCard
              article={article}
              key={article.article_id}
              user={user}
            />
          ))}
        </CardColumns>
      </div>
    );
  }
  componentDidMount() {
    const { topic, sort } = this.props;
    this.fetchArticles(topic, sort);
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic, sort } = this.props;
    const articlesUpdated = !_.isEqual(prevState.articles, this.state.articles);
    const sortUpdated = prevProps.sort !== sort;
    const topicUpdated = prevProps.topic !== topic;
    if (topicUpdated || articlesUpdated || sortUpdated)
      this.fetchArticles(topic, sort);
  }

  fetchArticles = (topic, sort) => {
    const { navigate } = this.props;
    getArticles(topic, sort)
      .then(articles => {
        if (articles.length === 0)
          navigate("/404", {
            replace: true
          });
        else
          return this.setState({
            articles
          });
      })
      .catch(() => navigate("/404", { replace: true }));
  };
}

Articles.propTypes = {};

export default Articles;
