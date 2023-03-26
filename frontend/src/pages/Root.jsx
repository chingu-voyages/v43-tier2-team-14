import { Outlet } from "react-router-dom";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
const Root = () => {
  return (
    <div className="h-screen">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Root;
