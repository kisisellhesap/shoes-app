import { type FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import useUser from "../hooks/useUser";

const MainLayout: FC = () => {
  const { user, isAuthenticated } = useUser();

  console.log(user);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user?.role === "admin") {
    return <Navigate to="/admin" replace />;
  }

  return (
    <div className="layout flex flex-col gap-10 pt-10 max-[1200px]:mx-5">
      <Header />
      <div className="">{isAuthenticated && <Outlet />}</div>
    </div>
  );
};

export default MainLayout;
