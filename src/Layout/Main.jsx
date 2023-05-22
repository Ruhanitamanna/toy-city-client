import React from "react";
import Header from "../components/Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Main = () => {
  // const location = useLocation();
  // const hideLayout = location.pathname === "/error"; // Specify the path where you want to hide the layout
  // return (
  //   <div>
  //     {!hideLayout && <Header />}
  //     <Outlet />
  //     {!hideLayout && <Footer />}
  //   </div>
  // );
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
