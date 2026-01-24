import React, { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // items per page
  const itemsPerPage = 5;

  // dummy data
  const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

  // calculate indexes
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;

  // items to show on current page
  const currentItems = items.slice(firstItemIndex, lastItemIndex);
  // 🔹 Total number of pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // 🔹 Array of page numbers for buttons
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Pagination</h2>

        <ul className="space-y-2">
          {currentItems.map((item, index) => (
            <li key={index} className="p-2 bg-gray-200 rounded text-center">
              {item}
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-4 space-x-2">
          {/* Previous Button */}
          <button
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1} // disable on first page
          >
            Prev
          </button>

          {/* Page Numbers */}
          {pageNumbers.map((number) => (
            <button
              key={number}
              className={`px-3 py-1 rounded ${
                currentPage === number
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </button>
          ))}

          {/* Next Button */}
          <button
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages} // disable on last page
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
