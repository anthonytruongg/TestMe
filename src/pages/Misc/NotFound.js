import React from "react";

function NotFound() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center w-screen h-screen">
        <h1 className="text-5xl text-white font-Jost font-bold">
          404 Not Found
        </h1>
        <p className="text-2xl text-slate-300 pt-2font-Jost font-semibold">
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
