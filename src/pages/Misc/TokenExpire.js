import React from "react";
import { Link } from "react-router-dom";

function TokenExpire() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center w-screen h-screen">
        <h1 className="text-5xl text-slate-300 font-Barlow leading-relaxed font-bold">
          Your session has expired! Please log back in.
        </h1>
        <p className="text-2xl text-white rounded-md hover:text-red-200 p-2 font-Jost shadow-2xl font-semibold">
          <Link to="/signin"> Log in </Link>
        </p>
      </div>
    </div>
  );
}

export default TokenExpire;
