import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Home from "./pages/PublicPages/Home/Home";
import Login from "./components/LoginForm/Login";
import Register from "./components/RegisterForm/Register";
import UsedCars from "./pages/PublicPages/UsedCars";
import NewCars from "./pages/PublicPages/NewCars";
import Services from "./pages/PublicPages/Services";
import Reviews from "./pages/PublicPages/Reviews";
import AboutUs from "./pages/AboutPages/AboutUs";
import About from "./pages/AboutPages/About";
import Team from "./pages/AboutPages/Team";
import Press from "./pages/AboutPages/Press";
import Dashboard from "./pages/UserPages/Dashboard";
import TrackMyOrder from "./pages/UserPages/TrackMyOrder";
import MyProfile from "./pages/UserPages/MyProfile";
import MyOrder from "./pages/UserPages/MyOrder";

const App = () => {
  return (
    <Routes>
      {/* Routes WITH Layout (Navbar + Footer) */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/newCars" element={<NewCars />} />
        <Route path="/usedCars" element={<UsedCars />} />
        <Route path="/services" element={<Services />} />
        <Route path="/reviews" element={<Reviews />} />

        {/* About routes */}
        <Route path="/about" element={<AboutUs />}>
          <Route index element={<About />} />
          <Route path="team" element={<Team />} />
          <Route path="press" element={<Press />} />
        </Route>

        {/* Protected routes - USE <Route> NOT <Dashboard> */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/trackOrder" element={<TrackMyOrder />} />
          <Route path="/myProfile" element={<MyProfile />} />
          <Route path="/myOrders" element={<MyOrder />} />
        </Route>
      </Route>

      {/* Routes WITHOUT Layout (no Navbar/Footer) */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;