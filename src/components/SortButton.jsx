import React from "react";
import { Button } from "react-bootstrap";

const SortButton = props => {
  const { direction, term, updateSort } = props;
  const glythDirection =
    direction === "desc" ? "down" : direction === "asc" ? "up" : null;
  const title = {
    created_at: "Date",
    comment_count: " Number of Comments",
    votes: "Number of Votes"
  };
  return (
    <div>
      <Button value={term} onClick={updateSort} variant="outline-light">
        <span
          className={
            glythDirection
              ? `glyphicon glyphicon-chevron-${glythDirection}`
              : null
          }
        />
        {title[term]}
      </Button>
    </div>
  );
};

export default SortButton;
