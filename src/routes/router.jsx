import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Component/MainLayout/MainLayout";
import Home from "../Component/Home/Home";
import Donation from "../Component/Donation/Donation";
import Help from "../Component/Help/Help";

import Faq from "../Component/Faq/Faq";
import DonationDetails from "../Component/DonationDetails/DonationDetails";
import AuthLayout from "../Component/AuthLayout/AuthLayout";
import ErrorPage from "../Component/MainLayout/ErrorPage";
import Login from "../Component/pages/Login";
import Register from "../Component/pages/Register";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../Component/DashBoard/UpdateProfile";
import Dashboard from "../Component/DashBoard/Dashboard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage />,
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
        {
            path: "/donationDetails/:id",
            element: <PrivateRoute>
                       <DonationDetails />
                     </PrivateRoute>,
            loader: async ({params})=>{
                const res = await fetch("/donation.json")
                const data = await res.json()
                const singleData = data.find(d => d.id == params.id)
                return singleData
            }
        },  
        {
            path: "/help",
            element: <Help />,
        },
        {
            path: "/dashboard",
            element: <PrivateRoute><Dashboard /></PrivateRoute>,
        },
        // {
        //     path: "/profile",
        //     element:<PrivateRoute><Profile /></PrivateRoute>
        // },
        {
            path: "/update-profile",
            element:<PrivateRoute><UpdateProfile /></PrivateRoute>
        },
        {
            path: "/faq",
            element: <Faq />,
        },
        {
            path: "auth",
            element: <AuthLayout />,
            children: [
                {
                    path: "/auth/login",
                    element: <Login />,
                },
                {
                    path: "/auth/register",
                    element: <Register />,
                }
            ]
        }, 
      ]
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
    
  ]);

  export default router;