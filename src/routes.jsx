import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import AboutPage from "./pages/about-page";
import BlogPage from "./pages/blog-page";
import ContactPage from "./pages/contact-page";
import CustomFurniturePage from "./pages/custom-furniture-page";
import HomePage from "./pages/home-page";
import MiningPage from "./pages/mining-page";
import SanitaryPage from "./pages/sanitary-page";
import ServicesPage from "./pages/services-page";
import WoodFinishingPage from "./pages/wood-finishing-page";

const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/services/custom-furniture", element: <CustomFurniturePage /> },
      { path: "/services/mining", element: <MiningPage /> },
      { path: "/services/wood-finishing", element: <WoodFinishingPage /> },
      { path: "/services/sanitary", element: <SanitaryPage /> },
      { path: "/services", element: <ServicesPage /> },
    ],
  },
]);

export default routes;
