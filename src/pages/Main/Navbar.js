import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/signin", { replace: true });
  };

  return (
    <nav className="flex justify-between p-3 items-center bg-gray-300 font-Jost font-semibold text-2xl">
      <div className="">
        <Link to="/home">TestMe</Link>
      </div>
      <div className="flex flex-col">
        <ul>
          <li>
            <Link
              to="/about"
              className="hover:bg-gray-500 font-Barlow rounded-md p-1"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/create"
              className="hover:bg-gray-500 font-Barlow rounded-md p-1"
            >
              Create
            </Link>
          </li>
          <li>
            <button
              className="hover:bg-gray-500 font-Barlow rounded-md p-1"
              onClick={logout}
            >
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
