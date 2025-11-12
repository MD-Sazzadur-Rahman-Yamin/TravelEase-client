import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllVehicle from "../pages/AllVehicle";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Error from "../pages/Error";
import ViewDetails from "../pages/ViewDetails";
import PrivateRourte from "../provider/PrivateRourte";
import AddVehicle from "../pages/AddVehicle";
import MyVehicles from "../pages/MyVehicles";
import UpdateVehicle from "../pages/UpdateVehicle";
import MyBookings from "../pages/MyBookings";

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
        Component: Registration,
      },
      {
        path: "view-details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3333/vehicle/${params.id}`),
        element: (
          <PrivateRourte>
            <ViewDetails></ViewDetails>
          </PrivateRourte>
        ),
      },
      {
        path: "add-vehicle",
        element: (
          <PrivateRourte>
            <AddVehicle></AddVehicle>
          </PrivateRourte>
        ),
      },
      {
        path: "my-vehicle",
        element: (
          <PrivateRourte>
            <MyVehicles></MyVehicles>
          </PrivateRourte>
        ),
      },
      {
        path: "my-vehicle/update-vehicle/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3333/vehicle/${params.id}`),
        element: (
          <PrivateRourte>
            <UpdateVehicle></UpdateVehicle>
          </PrivateRourte>
        ),
      },
      {
        path: "my-bookings",
        element: (
          <PrivateRourte>
            <MyBookings></MyBookings>
          </PrivateRourte>
        ),
      },
      {
        path: "*",
        Component: Error,
      },
    ],
  },
]);
export default router;
