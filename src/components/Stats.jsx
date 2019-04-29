import React, { Component } from "react";
import { Card, Table } from "react-bootstrap";
import { Link } from "@reach/router";
import { getArticles } from "../api";

class Stats extends Component {
  state = {
    articles: []
  };

  render() {
    const { articles } = this.state;
    return (
      <Card>
        <Card.Header>Trending Articles</Card.Header>
        <Card.Body>
          <Table className={"table table-hover"}>
            <thead>
              <tr>
                <th>#</th>
                <th>Article</th>
                <th>Author</th>
                <th>Votes</th>
              </tr>
            </thead>
            <tbody>
              {articles.map(({ title, author, article_id, votes }, i) => (
                <tr key={article_id}>
                  <td>{i + 1}</td>
                  <td>
                    <Link className="text-dark" to={`/articles/${article_id}`}>
                      {title}
                    </Link>
                  </td>
                  <td>
                    <Link className="text-dark" to={`/users/${author}`}>
                      {author}
                    </Link>
                  </td>
                  <td>{votes}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const topicUpdate = prevProps.topic !== this.props.topic;
    const userUpdate = prevProps.username !== this.props.username;
    if (topicUpdate || userUpdate) this.fetchArticles();
  }

  fetchArticles = () => {
    const { topic, username } = this.props;
    getArticles(topic, { votes: "desc" }, 0, username).then(({ articles }) => {
      this.setState({ articles });
    });
  };
}

export default Stats;
