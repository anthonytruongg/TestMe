import React from "react";
import Navbar from "../Main/Navbar";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <main>
        <Navbar />

        <div className="flex flex-col justify-center items-center w-screen h-screen">
          <div className="bg-slate-200 p-10 w-80 shadow-2xl rounded-xl text-center leading-8">
            <h1 className="text-2xl lg:text-4xl text-center font-Jost font-bold text-gray-600">
              TestMe is a free flashcard application.
            </h1>
            <p className="text-md py-4 lg:py-8 lg:text-lg font-Jost text-slate-600 font-light p-2">
              Created by a student! This project was made to help students with
              their everyday study tasks.
            </p>
            <h2 className="text-xl lg:text-2xl text-center font-Jost font-light text-gray-600">
              Feel free to check me out here.
            </h2>
            <div className="text-5xl flex justify-center gap-16 py-3 pb-10 text-slate-800">
              <a href="https://github.com/anthonytruongg">
                <AiFillGithub />
              </a>
              <a href="https://www.linkedin.com/in/anthony-truong-98339b241/">
                <AiFillLinkedin />
              </a>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}

export default About;
