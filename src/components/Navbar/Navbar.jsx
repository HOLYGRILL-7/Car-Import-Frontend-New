import React, { useState, useEffect } from "react";
import AuthSection from "./AuthSection";
import { useAuth } from "../../context/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { isLoggedIn, user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const isHomePage = location.pathname === "/";

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isLoggedIn() && isAdmin()) {
    return null;
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage && !isScrolled
          ? "bg-transparent"
          : "bg-primary-dark shadow-lg"
      }`}
    >
      {/* Backdrop blur for transparency */}
      {isHomePage && !isScrolled && (
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      )}

      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Logo />
          <NavLinks />
          <AuthSection
            isLoggedIn={isLoggedIn()}
            onlogout={handleLogout}
            user={user}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
