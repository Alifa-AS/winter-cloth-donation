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
            loader: () => fetch("/donation.json"),
        },
        {
            path: "/donation/category/:category",
            element: <Donation />,
            loader: () => fetch("/donation.json"),
        },
            // children:[
            //     {
            //         path: "category/:category",
            //         element:<Donation />
            //     }
            // ]

        
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
        },
        
      ]
    },
    {
        path: "*",
        element: <h1 className="font-bold text-center text-4xl">Error 404</h1>,
    }
  ]);

  export default router;