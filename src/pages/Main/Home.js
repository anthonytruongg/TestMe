import React from "react";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const email = localStorage.getItem("user-email");
  const token = localStorage.getItem("user-token");

  // use link http://localhost:3001/user/sets/63caf3a0061003c956482838
  function fetchSets() {
    axios.get("http://localhost:3001/user/sets").then((res) => {
      console.log(res.data);
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <main>
        <Navbar />
        <section className="min-h-screen p-4">
          <div className="flex flex-col m-4 gap-10 justify-center items-center px-10 md:px-20 lg:px-40 ">
            <div
              className="bg-violet-200 p-4 text-center lg:p-10 lg:w-80 w-60 hover:-translate-y-3 hover:scale-125 transition ease-in-out
              shadow-2xl rounded-xl font-Noto text-zinc-500 font-bold text-2xl text-ellipsis overflow-clip"
            >
              <Link className="" onClick={fetchSets}>
                Sociology 101
              </Link>
            </div>

            <div
              className="bg-violet-200 p-4 text-center lg:p-10 lg:w-80 w-60 hover:-translate-y-3 hover:scale-125 transition ease-in-out
            shadow-2xl rounded-xl font-Noto text-zinc-500 font-bold text-2xl text-ellipsis overflow-clip"
            >
              <Link className="">Physics 101</Link>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}

export default Home;
