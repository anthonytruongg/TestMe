import React from "react";
import { Outlet } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Landing from "./pages/Landing";

const useAuth = () => {
  const user = { isLoggedIn: true };

  return user && user.isLoggedIn;
};
function ProtectedRoutes() {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Landing />;
}

export default ProtectedRoutes;
