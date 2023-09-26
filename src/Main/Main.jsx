import { Outlet } from "react-router-dom";
import Navbar from "../Components/Home/Navbar/Navbar";
import Footer from "../Components/Home/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;