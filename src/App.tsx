import React, { useState } from 'react';
import Pagination from './Pagination';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20; // Replace with your total number of pages

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You can perform any necessary actions when the page changes here.
  };

  return (
    <div>
      {/* Your content */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
