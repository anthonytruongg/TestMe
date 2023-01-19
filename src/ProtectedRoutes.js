import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SignIn from "./pages/NewUsers/SignIn";

function ProtectedRoutes() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserToken = () => {
    const userToken = localStorage.getItem("user-token");

    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
      return navigate("/signin");
    }
    setIsLoggedIn(true);
  };

  useEffect(() => {
    checkUserToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return isLoggedIn ? <Outlet /> : <SignIn />;
}

export default ProtectedRoutes;

// const useAuth = () => {
//   const user = { isLoggedIn: true };

//   return user && user.isLoggedIn;
// };
// function ProtectedRoutes() {
//   const isAuth = useAuth();
//   return isAuth ? <Outlet /> : <Landing />;
// }

// export default ProtectedRoutes;
