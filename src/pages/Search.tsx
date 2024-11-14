import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import Table from "../components/Table";

const Search = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const backBtn = () => {
    navigate(-1);
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
  }, []);

  return (
    <div className="container flex flex-col justify-start mt-6">
      <button onClick={backBtn} className="max-w-36 bg-transparent px-4">
        <FontAwesomeIcon icon={faChevronLeft} color="white" className="pr-2" />
        Go back
      </button>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {results.length > 0 ? (
        <div>
          <h2 className="text-lg font-semibold mb-2">Results for : {query}</h2>
          <Table data={results} />
        </div>
      ) : (
        "No results "
      )}
    </div>
  );
};

export default Search;
