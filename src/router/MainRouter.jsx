import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllVehicle from "../pages/AllVehicle";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    // errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "all-vehicles",
        loader: () => fetch("http://localhost:3333/vehicle"),
        Component: AllVehicle,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "registration",
        Component: Registration
      },
      {
        path: "*",
        Component:Error
      }
    ],
  },
]);
export default router;
