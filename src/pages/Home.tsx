import Loading from "../components/Loading";
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
  const isLoading = useLoadingStore.getState().isLoading;
  const startLoading = useLoadingStore((state) => state.startLoading);
  const stopLoading = useLoadingStore((state) => state.stopLoading);

  if (!allMfData.length) {
    startLoading();
    fetchAllMfData()
      .then(() => {
        stopLoading();
      })
      .catch((error) => {
        stopLoading();
        console.error(error);
      });
  }

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <SearchBar /> <MfTable data={allMfData} />
        </>
      )}
    </div>
  );
};

export default Home;
