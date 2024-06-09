import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Services from "../pages/Servicespage/Services/Services";
import ServicesDetails from "../pages/Servicespage/ServicesDetails/ServicesDetails";
import Bolgs from "../pages/Blogs/Bolgs";
import Contact from "../pages/Contact/Contact";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/servicesdetails',
                element: <ServicesDetails></ServicesDetails>
            },
            {
                path: '/blogs',
                element: <Bolgs></Bolgs>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    },
]);
