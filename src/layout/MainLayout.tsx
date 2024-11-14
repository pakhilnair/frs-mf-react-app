import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div className="container flex flex-col mx-auto p-1 justify-center">
      <h1 className="text-2xl m-4">Mutual funds Info App 🚀</h1>
      <Outlet />
    </div>
  );
};

export default MainLayout;
