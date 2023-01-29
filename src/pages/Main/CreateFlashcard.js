import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import { motion } from "framer-motion";
function CreateFlashcard() {
  const location = useLocation();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [definition, setDefinition] = useState("");
  const [message, setMessage] = useState("");

  const { setID, subject } = location.state;

  const handleSubmit = (e) => {
    e.preventDefault();
    createCard();
  };

  const createCard = async () => {
    const email = localStorage.getItem("user-email");
    const token = localStorage.getItem("user-token");
    axios
      .post("http://localhost:3001/create/flashcard", {
        email: email,
        token: token,
        subject: subject,
        title: title,
        definition: definition,
      })
      .then((res) => {
        console.log(res.data);
        setDefinition("");
        setTitle("");
        if (res.data.message === "Please fill out all fields.") {
          setMessage(res.data.message);
        }
      });
  };

  useEffect(() => {
    // clear message after 4 seconds
    setTimeout(() => {
      setMessage("");
    }, 4000);
  });

  const handleDone = () => {
    navigate("/flashcards", {
      state: { set_ID: setID, subject: subject },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <main>
        {/* <Navbar /> */}

        <div className="flex flex-col justify-center items-center w-screen h-screen">
          <div className="bg-slate-200 p-10 w-80 shadow-2xl rounded-xl">
            <h1 className="text-2xl text-center font-Jost font-bold text-gray-600">
              Create your flashcards.
            </h1>
            <p className="text-sm py-4 lg:py-8 lg:text-lg font-Jost text-slate-600 font-light p-2">
              Add a title and definition for your study material!
            </p>
            <form
              action=""
              onSubmit={handleSubmit}
              className="flex flex-col items-start gap-2 pb-2"
            >
              <label
                htmlFor=""
                className="text-stone-500 font-medium lg:font-bold"
              >
                Title
              </label>
              <input
                type="text"
                className="outline-none font-light font-Barlow p-1 bg-transparent outline-neutral-300 rounded-md w-60 lg:text-xl "
                placeholder=""
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label
                htmlFor=""
                className="text-stone-500 font-medium lg:font-bold"
              >
                Definition
              </label>
              <textarea
                type="text"
                className="resize-none outline-none font-light font-Barlow p-1 bg-transparent outline-neutral-300 rounded-md w-60 lg:text-xl "
                placeholder=""
                rows={5}
                cols={5}
                value={definition}
                onChange={(e) => setDefinition(e.target.value)}
              />
            </form>

            <p className="text-red-600 font-bold font-IBM text-center">
              {message}
            </p>

            <div className="flex gap-2 p-2">
              <button
                onClick={handleDone}
                className="bg-teal-500 w-60 p-1 rounded-lg font-Jost font-semibold text-white"
              >
                Done
              </button>
              <button
                onClick={handleSubmit}
                className="bg-teal-500 w-60 p-1 rounded-lg font-Jost font-semibold text-white"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}

export default CreateFlashcard;
