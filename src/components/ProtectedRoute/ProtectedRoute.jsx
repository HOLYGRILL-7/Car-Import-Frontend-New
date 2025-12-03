import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, loading } = useAuth();

  //show loading while checking auth status
  if (loading) {
    return <div>Loading...</div>;
  }

  //If not logged in, redirect to login page
  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }

  //if logged in, render the child components
  return children;
};
export default ProtectedRoute;
