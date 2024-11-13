import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";

const Search = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const backBtn = () => {
    navigate(-1);
  };
  const navigateToDetails = (schemeCode: number) => {
    console.log(schemeCode);
    navigate(`/mf/${schemeCode}`);
  };

  useEffect(() => {
    // setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.mfapi.in/mf/search?q=${query}`
        );

        if (!response.ok) {
          throw new Error("Failed to search");
        }

        const data = await response.json();
        setResults(data);
        console.log(results);
      } catch (error) {
        setError("An error occurred while fetching results. Please try again.");
        console.error(error);
      } finally {
        // setIsLoading(false);
      }
    };
    fetchData();
  }, [query]);

  return (
    <div className="container flex flex-col justify-start">
      <button
        onClick={backBtn}
        className="max-w-36 mb-6 border border-gray-400 py-2 rounded-md px-4"
      >
        <FontAwesomeIcon icon={faChevronLeft} color="white" className="pr-2" />
        Go back
      </button>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {results.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-2">Results:</h2>

          <div className="relative overflow-x-auto rounded-md">
            <table className="w-full text-left border-gray-700">
              <thead className="text-sm text-gray-300 uppercase bg-gray-800 border-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    <p>Serial</p>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <p>Mutual Fund</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {results.map((result, index) => (
                  <tr
                    className="border-t dark:border-gray-700 text-sm cursor-pointer"
                    key={index}
                    onClick={() => navigateToDetails(result.schemeCode)}
                  >
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 font-medium whitespace-nowrap"
                    >
                      <p>{index + 1}</p>
                    </th>

                    <td className="px-6 py-4">{result.schemeName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
