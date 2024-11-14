import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import NavDateChart from "./NavDateChart";
import { useState, useEffect } from "react";
import Card from "./Card";
const MfDetails = () => {
  const { schemeCode } = useParams();
  const navigate = useNavigate();

  const backBtn = () => {
    navigate(-1);
  };

  const [mfData, setMfData] = useState();
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
    <div className="container flex flex-col mt-6">
      <button onClick={backBtn} className="max-w-36 bg-transparent text-left">
        <FontAwesomeIcon icon={faChevronLeft} color="white" className="pr-2" />
        Go back
      </button>
      <div className="flex flex-col justify-between md:flex-row w-full mt-8 md:space-x-8 space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-1 gap-2 text-left rounded-md md:w-1/3 overflow-auto">
          <Card>
            <p className="text-sm text-gray-400">Fund house : </p>
            <p className="text-sm font-bold">{mfData.meta.fund_house} </p>
          </Card>
          <Card>
            <p className="text-sm text-gray-400">Scheme type : </p>
            <p className="text-sm font-bold">{mfData.meta.scheme_type} </p>
          </Card>
          <Card>
            <p className="text-sm text-gray-400">Scheme category : </p>
            <p className="text-sm font-bold">{mfData.meta.scheme_category} </p>
          </Card>
          <Card>
            <p className="text-sm text-gray-400">Scheme code : </p>
            <p className="text-sm font-bold">{mfData.meta.scheme_code} </p>
          </Card>
          <div className="col-span-2 md:col-span-1">
            <Card>
              <p className="text-sm text-gray-400">Scheme name :</p>
              <p className="text-sm font-bold">{mfData.meta.scheme_name} </p>
            </Card>
          </div>
        </div>

        <div className="md:w-full">
          <NavDateChart chartData={mfData.data} />
        </div>
      </div>
    </div>
  );
};

export default MfDetails;
