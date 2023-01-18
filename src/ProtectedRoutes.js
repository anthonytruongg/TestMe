import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import { useLocation } from "react-router-dom";
import axios from "axios";

function ProtectedRoutes() {
  const location = useLocation();
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
    console.log(isLoggedIn);
    console.log(localStorage);
  }, [isLoggedIn]);

  return isLoggedIn ? <Outlet /> : <SignIn />;
  // axios
  //   .post("http://localhost:3001/user/auth", {
  //     token: token,
  //   })
  //   .then((res) => {
  //     console.log(res.data);
  //     if (res.data.message === "Not authenticated") {
  //       return <SignIn />;
  //     } else {
  //       return <Outlet />;
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // useEffect(() => {
  //   console.log("Token: ", token);
  // });
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
