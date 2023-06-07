import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../../hooks/useAuthProvider";

function MemberRoute({ children }: any) {
  const { loggedIn, user } = useAuth();

  if (!loggedIn || user?.account_verified == false) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
export default MemberRoute;
