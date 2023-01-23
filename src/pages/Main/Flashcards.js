import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
function Flashcards(props) {
  const location = useLocation();
  const { subject, flashcards } = location.state;
  const [cardsArray, setCardsArray] = useState([]);

  const user_id = localStorage.getItem("user-id");
  //   const set_id = setID;

  //   function fetchCards() {
  // axios
  //   .get(`http://localhost:3001/user/sets/${user_id}/${set_id}`)
  //   .then((res) => {
  //     console.log(res.data);
  //     //   setCardsArray(res.data.flashcards);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  //   }

  //   useEffect(() => {
  //     fetchCards();
  //   }, []);

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
            {flashcards.map((card, index) => {
              return (
                <div
                  key={index}
                  className="bg-violet-200 p-4 text-center lg:p-10 lg:w-80 w-60 hover:-translate-y-3 hover:scale-125 transition ease-in-out
              shadow-2xl rounded-xl font-Noto text-zinc-500 font-bold text-2xl text-ellipsis overflow-clip"
                >
                  <p>{card.title}</p>
                  <p>{card.definition}</p>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </motion.div>
  );
}

export default Flashcards;
