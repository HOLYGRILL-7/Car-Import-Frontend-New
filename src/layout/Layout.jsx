import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/register";
  
  const hideFooter = location.pathname === "/services";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {!hideNavbar && <Navbar />}

      <main className="flex-1">
        <Outlet /> {/* ← Changed from {children} */}
      </main>

      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;