import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "@reach/router";

const TopTable = ({ articles, sortCol }) => {
  return (
    <Table className={"table table-hover"}>
      <thead>
        <tr>
          <th>#</th>
          <th>Article</th>
          <th>Author</th>
          <th>{sortCol === "comment_count" ? "Comments" : "Votes"}</th>
        </tr>
      </thead>
      <tbody>
        {articles.map((article, i) => (
          <tr key={article.article_id}>
            <td>{i + 1}</td>
            <td>
              <Link
                className="text-dark"
                to={`/articles/${article.article_id}`}
              >
                {article.title}
              </Link>
            </td>
            <td>
              <Link className="text-dark" to={`/users/${article.author}`}>
                {article.author}
              </Link>
            </td>
            <td>{article[sortCol]}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TopTable;
