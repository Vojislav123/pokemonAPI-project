import React from "react";

const Pagination = ({ currentPage, totalPages, goToPage }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];

    if (currentPage === 1) {
      for (let i = 1; i <= Math.min(totalPages, 3); i++) {
        pageNumbers.push(i);
      }
    } else if (currentPage === totalPages) {
      for (let i = totalPages - 2; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(currentPage - 1, currentPage, currentPage + 1);
    }

    return pageNumbers;
  };

  return (
    <div>
      <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>

      {getPageNumbers().map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => goToPage(pageNumber)}
          className={pageNumber === currentPage ? "active" : ""}
        >
          {pageNumber}
        </button>
      ))}

      <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;