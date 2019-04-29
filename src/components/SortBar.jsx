import "./css/SortBar.css";
import React from "react";
import { Navbar } from "react-bootstrap";
import SortButton from "./SortButton";

const SortBar = props => {
  const { sort, updateSort } = props;
  return (
    <Navbar bg="dark">
      <p className="text-white bg-dark">Sort by:</p>
      <SortButton
        direction={sort.created_at}
        term="created_at"
        updateSort={updateSort}
      />
      <SortButton
        direction={sort.comment_count}
        term="comment_count"
        updateSort={updateSort}
      />
      <SortButton direction={sort.votes} term="votes" updateSort={updateSort} />
    </Navbar>
  );
};

export default SortBar;
