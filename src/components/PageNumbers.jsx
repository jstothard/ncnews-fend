import React from "react";
import { Pagination } from "react-bootstrap";
import { pageArray } from "./utils";

const PageNumbers = props => {
  const { totalPages, page, changePage } = props;
  const pageArr = pageArray(page, totalPages);

  return (
    <Pagination>
      <Pagination.First key="first" value={0} onClick={changePage} />
      <Pagination.Prev
        key="prev"
        value={page - 1}
        onClick={changePage}
        disabled={page === 0}
      />
      {pageArr.length !== 0
        ? pageArr.map((num, index) => {
            const elipseNum = index === 1 ? num - 3 : num + 3;
            return num === "..." ? (
              <Pagination.Ellipsis
                key={elipseNum}
                value={elipseNum - 1}
                onClick={changePage}
              />
            ) : (
              <Pagination.Item
                key={num}
                value={num - 1}
                active={num - 1 === page}
                onClick={changePage}
              >
                {num}
              </Pagination.Item>
            );
          })
        : null}
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
