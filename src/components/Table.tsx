import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Table = ({ data }) => {
  const rowsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentPageData = data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((current) => current - 1);
  };
  const handleNextPage = () => {
    setCurrentPage((current) => current + 1);
  };

  const navigate = useNavigate();
  const navigateToDetails = (schemeCode: number) => {
    console.log(schemeCode);
    navigate(`/mf/${schemeCode}`);
  };

  return (
    <div className="relative overflow-x-auto rounded-md">
      <table className="w-full text-left border-gray-700">
        <thead className="text-sm text-gray-300 uppercase bg-gray-800 border-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3">
              <p>Mutual Funds</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((mf, index) => (
            <tr
              className="border-t dark:border-gray-700 text-sm cursor-pointer hover:shadow-md hover:border-b"
              key={index}
              onClick={() => navigateToDetails(mf.schemeCode)}
            >
              <td className="px-6 py-4">{mf.schemeName}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <button
          disabled={currentPage === 1}
          onClick={handlePreviousPage}
          className="px-4 py-2 bg-gray-700 text-white disabled:opacity-50"
        >
          Previous
        </button>{" "}
        <span className="text-gray-300">
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
          className="px-4 py-2 bg-gray-700 text-white disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
