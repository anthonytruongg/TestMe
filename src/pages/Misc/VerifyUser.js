import React from "react";
import { Link } from "react-router-dom";
function VerifyUser() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center w-screen text-center h-screen">
        <div className="bg-slate-200 p-10 w-80 shadow-2xl rounded-xl">
          <h1 className="text-2xl text-center font-Jost font-bold text-gray-600">
            Thank you for verifying your account!
          </h1>
          <p className="text-sm py-4 lg:py-8 lg:text-lg font-Jost text-slate-600 font-light p-2">
            Please proceed to our login page!
          </p>
          <Link
            className="text-sm py-4 lg:py-8 lg:text-lg font-Jost text-slate-600 font-bold p-2"
            to="/signin"
          >
            Log in
          </Link>
        </div>
      </div>
    </main>
  );
}

export default VerifyUser;
