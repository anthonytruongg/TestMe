import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between p-3 items-center bg-gray-300 font-Jost font-semibold text-2xl">
      <div className="">
        <Link to="/">TestMe</Link>
      </div>
      <div className="flex flex-col">
        <ul>
          <li>
            <Link to="/about" className="hover:bg-gray-500 rounded-md p-1">
              About
            </Link>
          </li>
          <li>
            <Link to="/create" className="hover:bg-gray-500 rounded-md p-1">
              Create
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
