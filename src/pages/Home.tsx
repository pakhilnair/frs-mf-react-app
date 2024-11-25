import { useState, useEffect } from "react";
import MfTable from "../components/MfTable";
import SearchBar from "../components/SearchBar";

const Home = () => {
  type AllMfData = {
    schemeCode: number;
    schemeName: string;
  };

  const [allData, setAllData] = useState<AllMfData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null | unknown>(null);

  useEffect(() => {
    let isMounted: boolean = true;
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.mfapi.in/mf");
        if (!response.ok) {
          throw new Error("Api fetch failed");
        }
        const json = await response.json();
        if (isMounted) {
          setAllData(json);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
          setLoading(false);
        }
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading || !allData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 p-4 bg-red-100 rounded">
        Error: {String(error)}
      </div>
    );
  }

  return (
    <div>
      <SearchBar />
      <MfTable data={allData} />
    </div>
  );
};

export default Home;
