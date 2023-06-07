import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../../hooks/useAuthProvider";

function AdminRoute({ children }: any) {
  const { loggedIn, user } = useAuth();

  const isAuthenticated = loggedIn && user?.role == "Admin";
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}
export default AdminRoute;
