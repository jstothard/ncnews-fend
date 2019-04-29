import React, { Component } from "react";
import { Card, Table } from "react-bootstrap";
import { Link } from "@reach/router";

class Stats extends Component {
  state = {
    articles: [
      {
        author: "weegembump",
        title: "History of FC Barcelona",
        article_id: 16,
        topic: "football",
        created_at: "2018-02-17T00:00:00.000Z",
        votes: 91,
        comment_count: "16"
      },
      {
        author: "tickle122",
        title: "Defensive Metrics: Measuring the Intensity of a High Press",
        article_id: 22,
        topic: "football",
        created_at: "2017-01-26T00:00:00.000Z",
        votes: 84,
        comment_count: "8"
      },
      {
        author: "grumpy19",
        title: "Learn HTML5, CSS3, and Responsive WebSite Design in One Go",
        article_id: 9,
        topic: "coding",
        created_at: "2017-03-06T00:00:00.000Z",
        votes: 77,
        comment_count: "8"
      },
      {
        author: "weegembump",
        title: "Sunday league football",
        article_id: 23,
        topic: "football",
        created_at: "2016-11-18T00:00:00.000Z",
        votes: 76,
        comment_count: "14"
      },
      {
        author: "tickle122",
        title: "What to Cook This Week",
        article_id: 31,
        topic: "cooking",
        created_at: "2017-11-05T00:00:00.000Z",
        votes: 63,
        comment_count: "12"
      },
      {
        author: "jessjelly",
        title:
          "Twice-Baked Butternut Squash Is the Thanksgiving Side Dish of Your Dreams",
        article_id: 30,
        topic: "cooking",
        created_at: "2018-05-06T00:00:00.000Z",
        votes: 38,
        comment_count: "8"
      },
      {
        author: "tickle122",
        title: "The vegan carnivore?",
        article_id: 36,
        topic: "cooking",
        created_at: "2017-04-14T00:00:00.000Z",
        votes: 37,
        comment_count: "6"
      },
      {
        author: "happyamy2016",
        title: "Who Will Manage Your Club in 2021?",
        article_id: 14,
        topic: "football",
        created_at: "2016-08-25T00:00:00.000Z",
        votes: 31,
        comment_count: "3"
      },
      {
        author: "grumpy19",
        title:
          "JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals",
        article_id: 6,
        topic: "coding",
        created_at: "2018-03-14T00:00:00.000Z",
        votes: 30,
        comment_count: "11"
      },
      {
        author: "cooljmessy",
        title: "Which current Premier League manager was the best player?",
        article_id: 17,
        topic: "football",
        created_at: "2016-07-12T00:00:00.000Z",
        votes: 18,
        comment_count: "12"
      }
    ]
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
}

export default Stats;
