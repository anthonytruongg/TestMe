import React from "react";
import { useNavigate } from "react-router-dom";

function LandingNavbar() {
  const navigate = useNavigate();

  const email = localStorage.getItem("user-email");

  const logout = () => {
    localStorage.clear();
    navigate("/signin", { replace: true });
  };

  return (
    <main className="bg-neutral-100 text-2xl p-1 lg:text-5xl lg:p-4">
      <div className="flex flex-row text-gray-400 items-center justify-between">
        <div className="">
          <h1 className="font-Urbanist font-semibold">PomoDomo Study</h1>
        </div>
      </div>
    </main>
  );
}

export default LandingNavbar;
