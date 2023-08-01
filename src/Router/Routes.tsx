import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Layout/Home/HomePage";
import Catalog from "../Layout/Catalog/Catalog";
import ProductDetails from "../Layout/Catalog/ProductDetails";
import AboutPage from "../Layout/About/AboutPage";
import ContactPage from "../Layout/Contact/ContactPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {path: "", element: <HomePage></HomePage>},
            {path: "catalog", element: <Catalog/>},
            {path: "catalog/:id", element:<ProductDetails></ProductDetails> },
            {path: "about", element: <AboutPage></AboutPage>},
            {path: "contact", element: <ContactPage></ContactPage>}
        ]
    }
])