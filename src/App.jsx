import React from "react";
import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Home from "./pages/PublicPages/Home/Home";
import Login from "./components/LoginForm/Login";
import Register from "./components/RegisterForm/Register";
import UsedCars from "./pages/PublicPages/UsedCars";
import NewCars from "./pages/PublicPages/NewCars";
import Services from "./pages/PublicPages/Services";
import Reviews from "./pages/PublicPages/Reviews";

const App = () => {
  const location = useLocation();
  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/newCars" element={<NewCars />} />
        <Route path="/usedCars" element={<UsedCars />} />
        <Route path="/services" element={<Services />} />
        <Route path="/reviews" element={<Reviews />} />

        {/* Protected User routes */}
        <Route element={<ProtectedRoute />}>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
