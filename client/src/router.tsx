import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Admin from "./pages/Admin/Admin";
import MainLayout from "./layout/MainLayout";
import Create from "./pages/create/Create";

export const router = createBrowserRouter([
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "detail/:id", element: <Detail /> },
      { path: "admin", element: <Admin /> },
      { path: "admin/create", element: <Create /> },
    ],
  },
]);
