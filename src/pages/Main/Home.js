import React from "react";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import instance from "../Misc/api";

function Home() {
  const navigate = useNavigate();

  const [setsArray, setSetsArray] = useState([]);

  const user_id = localStorage.getItem("user-id");

  function fetchSets() {
    instance
      .get(`/retrieve/sets/${user_id}`)
      .then((res) => {
        setSetsArray(res.data.sets);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchSets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (setsArray.length === 0) {
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
              <div className="p-4 text-center lg:p-10 font-Jost text-white text-2xl text-ellipsis overflow-clip">
                Nothing to display!
              </div>
            </div>
          </section>
        </main>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <main className="min-h-screen">
          <Navbar />
          <section className="flex justify-center items-center p-4 m-4">
            {/* <div className="flex flex-col m-4 gap-10 justify-center items-center px-10 md:px-20 lg:px-40 "> */}
            <div className="lg:grid lg:grid-cols-3 gap-20">
              {setsArray.map((set, index) => {
                return (
                  <div
                    key={index}
                    className="bg-stone-500 p-4 m-2 text-center lg:p-10 lg:w-80 w-60 hover:-translate-y-3 hover:scale-125 transition ease-in-out
                    shadow-2xl rounded-xl font-Jost text-white text-2xl text-ellipsis
                    overflow-clip cursor-pointer"
                    onClick={() =>
                      navigate("/flashcards", {
                        state: {
                          subject: set.subject,
                          description: set.description,
                          flashcards: set.flashcards,
                          set_ID: set._id,
                        },
                      })
                    }
                  >
                    {set.subject}
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </motion.div>
    );
  }
}

export default Home;
