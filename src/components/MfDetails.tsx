import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import NavDateChart from "./NavDateChart";
import { useState, useEffect } from "react";
const MfDetails = () => {
  const { schemeCode } = useParams();
  const navigate = useNavigate();

  const backBtn = () => {
    navigate(-1);
  };

  const [mfData, setMfData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted: boolean = true;
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.mfapi.in/mf/${schemeCode}`);
        if (!response.ok) {
          throw new Error("Api fetch failed");
        }
        const json = await response.json();
        if (isMounted) {
          setMfData(json);
          setLoading(false);
          console.log(mfData);
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
  }, [schemeCode]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 p-4 bg-red-100 rounded">Error: {error}</div>
    );
  }

  return (
    <div className="container flex flex-col max-w-6xl justify-start mt-6">
      <button
        onClick={backBtn}
        className="max-w-36 border border-gray-400 py-2 rounded-md px-4"
      >
        <FontAwesomeIcon icon={faChevronLeft} color="white" className="pr-2" />
        Go back
      </button>
      <div className="flex flex-col space-y-4 mt-4 items-start">
        <p>Fund house : {mfData.meta.fund_house} </p>
        <p>Scheme type : {mfData.meta.scheme_type} </p>
        <p>Scheme category : {mfData.meta.scheme_category} </p>
        <p>Scheme code : {mfData.meta.scheme_code} </p>
        <p>Scheme name : {mfData.meta.scheme_name} </p>
        <NavDateChart chartData={mfData.data} />
      </div>
    </div>
  );
};

export default MfDetails;
