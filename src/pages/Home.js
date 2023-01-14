import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <main>
      <Navbar />

      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <div className="bg-slate-200 p-10 w-80 shadow-2xl rounded-xl">
          <h1>HOMEPAGE</h1>
        </div>
      </div>
    </main>
  );
}

export default Home;
