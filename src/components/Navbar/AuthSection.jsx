import React from "react";
import { Link } from "react-router-dom";

const AuthSection = ({ isUserPath, user, onLogout }) => {
  return (
    <div className="contents">
      {isUserPath && (
        <>
          <Link
            to="/users/dashboard"
            className="text-white hover:text-secondary-light transition-colors font-medium"
          >
            Dashboard
          </Link>
          <span>Welcome, {user?.name}</span>
          <button
            onClick={onLogout}
            className="bg-secondary hover:bg-secondary-dark px-5 py-2 rounded-lg font-medium transition-all text-white" // Red button
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default AuthSection;
