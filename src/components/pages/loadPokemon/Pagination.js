import styles from '../css/Pagination.module.css'


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

    <div className={`flex items-center justify-between ${styles.paginationContainer}`}>
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-400 text-white rounded"
      >
        Previous
      </button>

      <div className="flex items-center">
        {getPageNumbers().map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => goToPage(pageNumber)}
            className={`px-4 py-2 mx-1 ${
              pageNumber === currentPage ? "bg-white text-gray-400" : "bg-gray-400 text-white"
            } rounded`}
          >
            {pageNumber}
          </button>
        ))}
      </div>

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-400 text-white rounded"
      >
        Next
      </button>
    </div>
    
  );
};

export default Pagination;
