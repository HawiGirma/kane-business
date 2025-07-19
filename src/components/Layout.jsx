import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Layout = () => {
  return (
    <div className="relative bg-[#E9EFEC]  max-h-max min-h-screen font-[Poppins] scroll-smooth">
      <div className="absolute w-full">
        <Navbar />
      </div>
      <div className="">
        <Outlet />
      </div>
      <div className="absolute w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
