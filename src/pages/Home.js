import React from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const location = useLocation();

  const email = localStorage.getItem("user-email");
  const token = localStorage.getItem("user-token");

  useEffect(() => {
    console.log("Email: ", email);
    console.log("Token: ", token);
  });
  return (
    <main>
      <Navbar />

      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <div className="bg-slate-200 p-10 w-80 shadow-2xl rounded-xl">
          <h1>Hello {email}</h1>
        </div>
      </div>
    </main>
  );
}

export default Home;
