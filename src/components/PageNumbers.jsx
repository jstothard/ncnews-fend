import React from "react";
import { Pagination } from "react-bootstrap";

const PageNumbers = props => {
  const { totalPages, page, changePage } = props;
  const pageArray = new Array(totalPages).fill(undefined);
  return (
    <Pagination>
      <Pagination.First key="first" value={0} onClick={changePage} />
      <Pagination.Prev
        key="prev"
        value={page - 1}
        onClick={changePage}
        disabled={page === 0}
      />
      {pageArray.map((_, i) => {
        return (
          <Pagination.Item
            key={i}
            value={i}
            active={i === page}
            onClick={changePage}
          >
            {i + 1}
          </Pagination.Item>
        );
      })}
      <Pagination.Next
        key="next"
        value={page + 1}
        onClick={changePage}
        disabled={page === totalPages - 1}
      />
      <Pagination.Last key="last" value={totalPages - 1} onClick={changePage} />
    </Pagination>
  );
};

export default PageNumbers;
