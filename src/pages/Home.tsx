import MfTable from "../components/MfTable";
import SearchBar from "../components/SearchBar";
import { useMfStore, useLoadingStore } from "../store";

const Home = () => {
  interface AllMfType {
    schemeCode: number;
    schemeName: string;
  }

  const allMfData: AllMfType[] = useMfStore((state) => state.allMf);
  const fetchAllMfData = useMfStore((state) => state.fetchMf);
  const toggleLoading = useLoadingStore((state) => state.toggleLoading);

  if (!allMfData.length) {
    toggleLoading();
    fetchAllMfData();
    toggleLoading();
  }

  return (
    <div>
      <SearchBar />
      {/* <button onClick={fetchAllMfData}>Fetch MF Data</button> */}
      <MfTable data={allMfData} />
    </div>
  );
};

export default Home;
