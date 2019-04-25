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
    const { topic } = this.props;
    return (
      <div>
        {topic ? (
          <p className="display-4">{topic[0].toUpperCase() + topic.slice(1)}</p>
        ) : null}
        <CardColumns>
          {articles.map(article => (
            <ArticleCard article={article} key={article.article_id} />
          ))}
        </CardColumns>
      </div>
    );
  }
  componentDidMount() {
    const { topic } = this.props;
    this.fetchArticles(topic);
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    const articlesUpdated = !_.isEqual(prevState.articles, this.state.articles);
    const topicUpdated = prevProps.topic !== topic;
    if (topicUpdated || articlesUpdated) this.fetchArticles(topic);
  }

  fetchArticles = topic => {
    getArticles(topic).then(articles => {
      return this.setState({
        articles
      });
    });
  };
}

Articles.propTypes = {};

export default Articles;
