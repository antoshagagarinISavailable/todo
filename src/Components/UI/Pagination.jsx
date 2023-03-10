import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pageCount + 1);

  const pagesRender = () => {
    return pages.map((el) => (
      <li
        key={el}
        className={"page-item " + (el === currentPage ? "active" : "")}
      >
        <button className="page-link" onClick={() => onPageChange(el)}>
          {el}
        </button>
      </li>
    ));
  };

  return pageCount > 1 ? (
    <nav>
      <ul className="pagination">{pagesRender()}</ul>
    </nav>
  ) : null;
};

export default Pagination;
