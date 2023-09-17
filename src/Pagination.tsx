import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (page) => {
    onPageChange(page);
  };

  const renderNumericButtons = () => {
    const numericButtons = [];
    const showFirstNumeric = currentPage > 3;
    const showLastNumeric = currentPage < totalPages - 2;

    if (showFirstNumeric) {
      numericButtons.push(
        <button
          key={1}
          onClick={() => handlePageClick(1)}
          className={`px-3 py-2 mx-1 rounded ${
            currentPage === 1
              ? 'bg-blue-500 text-white'
              : 'bg-white text-blue-500'
          }`}
        >
          1
        </button>
      );
      if (currentPage > 4) {
        numericButtons.push(
          <span key="start-ellipsis" className="mx-1">
            ...
          </span>
        );
      }
    }

    for (
      let page = Math.max(1, currentPage - 2);
      page <= Math.min(totalPages, currentPage + 2);
      page++
    ) {
      numericButtons.push(
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`px-3 py-2 mx-1 rounded ${
            currentPage === page
              ? 'bg-blue-500 text-white'
              : 'bg-white text-blue-500'
          }`}
        >
          {page}
        </button>
      );
    }

    if (showLastNumeric) {
      if (currentPage < totalPages - 3) {
        numericButtons.push(
          <span key="end-ellipsis" className="mx-1">
            ...
          </span>
        );
      }
      numericButtons.push(
        <button
          key={totalPages}
          onClick={() => handlePageClick(totalPages)}
          className={`px-3 py-2 mx-1 rounded ${
            currentPage === totalPages
              ? 'bg-blue-500 text-white'
              : 'bg-white text-blue-500'
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return numericButtons;
  };

  return (
    <div className="flex items-center justify-center my-4">
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        className={`px-3 py-2 mx-1 rounded ${
          currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'
        }`}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {renderNumericButtons()}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        className={`px-3 py-2 mx-1 rounded ${
          currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 text-white'
        }`}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
