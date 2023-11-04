import { createBrowserRouter } from "react-router-dom";
import Layout from "./container/Layout/Layout";
import Status from "./pages/Status/Status";
import TimeLine from "./pages/Timeline/Timeline";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <TimeLine />,
      },
      {
        path: "/status/:id",
        element: <Status />,
      },
    ],
  },
]);
