import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface TableDataItem {
  schemeCode: number;
  schemeName: string;
}

interface TableData {
  data: TableDataItem[];
}

const Table = ({ data }: TableData) => {
  const rowsPerPage = 40;
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
    navigate(`/mf/${schemeCode}`);
  };

  return (
    <div className="relative overflow-x-auto rounded-sm">
      <table className="w-full text-left border-gray-900">
        <thead className="text-sm text-gray-300 uppercase bg-gray-800 border-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3">
              <p>Mutual Funds</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((mf: TableDataItem, index: number) => (
            <tr
              className="flex justify-between items-center border-b border-x rounded-sm dark:border-gray-700 text-sm cursor-pointer hover:shadow-md hover:bg-gray-900 hover:shadow-zinc-800/80 hover:border-indigo-900"
              key={index}
              onClick={() => navigateToDetails(mf.schemeCode)}
            >
              <td className="px-6 py-4">{mf.schemeName}</td>
              <td className="px-6">
                <FontAwesomeIcon icon={faChevronRight} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-evenly mt-6 items-center">
        <button
          disabled={currentPage === 1}
          onClick={handlePreviousPage}
          className="text-sm md:text-md px-4 py-2 bg-gray-800 rounded-sm text-gray-200 disabled:opacity-50 hover:bg-gray-900 hover:border hover:border-indigo-900 hover:shadow-md hover:shadow-zinc-800"
        >
          <FontAwesomeIcon className="pr-2" icon={faChevronLeft} size="sm" />
          Previous
        </button>{" "}
        <span className="text-gray-300 text-sm md:text-md">
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
          className="text-sm md:text-md px-4 py-2 bg-gray-800 rounded-sm text-gray-200 border border-transparent disabled:opacity-50 hover:bg-gray-900 hover:border hover:border-indigo-900 hover:shadow-md hover:shadow-zinc-800"
        >
          Next
          <FontAwesomeIcon className="pl-2" icon={faChevronRight} size="sm" />
        </button>
      </div>
    </div>
  );
};

export default Table;
