import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Component/MainLayout/MainLayout";
import Home from "../Component/Home/Home";
import Donation from "../Component/Donation/Donation";
import Help from "../Component/Help/Help";
import Dashboard from "../Dashboard/Dashboard";
import Faq from "../Component/Faq/Faq";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/donation",
            element: <Donation />,
        },
        {
            path: "/help",
            element: <Help />,
        },
        {
            path: "/dashboard",
            element: <Dashboard />,
        },
        {
            path: "/faq",
            element: <Faq />,
        }
      ]
    },
  ]);

  export default router;