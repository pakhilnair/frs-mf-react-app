import { useLoadingStore } from "../store";

const Loading = () => {
  const isLoading: boolean = useLoadingStore((state) => state.isLoading);

  if (isLoading) {
    console.log("loading");
    return (
      <div className="flex justify-center items-center h-screen z-10">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
};

export default Loading;
