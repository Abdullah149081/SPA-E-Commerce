import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userContext } from "../provider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(userContext);

  if (loading) {
    return (
      <div className="flex justify-center h-screen items-center">
        <progress className="progress w-56 " />;
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoutes;
