import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import {
  BsArrowCounterclockwise,
  BsArrowRight,
  BsArrowLeft,
} from "react-icons/bs";
import axios from "axios";
import "./StudyFlashcards.css";

function StudyFlashcards(props) {
  const location = useLocation();
  const navigate = useNavigate();

  const { setID, flashcards, subject, description } = location.state;

  const [viewFlashcard, setViewFlashcard] = useState(true);
  const [fetchedFlashcards, setFetchedFlashcards] = useState([]);
  const [displayFlashcard, setDisplayFlashcard] = useState([
    {
      title: "",
      definition: "",
    },
  ]);

  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [endOfSet, setEndOfSet] = useState(false);

  function toggleView() {
    setViewFlashcard(!viewFlashcard);
  }

  function inputFlashcardOne() {
    if (!flashcards) {
      setMessage("Please add some flashcards to this set!");
    } else {
      setDisplayFlashcard([flashcards[count]]);
    }
  }

  function nextFlashcard() {
    setViewFlashcard(true);
    setMessage("");
    if (count === flashcards.length - 1) {
      setMessage("Congrats! You've reached the end of this set!");
      setEndOfSet(true);
    } else {
      setCount(count + 1);
      setDisplayFlashcard([flashcards[count]]);
    }
  }

  function previousFlashcard() {
    setMessage("");
    setViewFlashcard(true);
    setEndOfSet(false);
    if (count === 0) {
      return;
    } else {
      setCount(count - 1);
      setDisplayFlashcard([flashcards[count]]);
    }
  }

  function goBack() {
    navigate("/flashcards", {
      state: { set_ID: setID, subject: subject, description: description },
    });
  }

  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowUp":
        // Do something for ArrowUp key
        break;
      case " ":
        toggleView();
        break;
      case "ArrowLeft":
        previousFlashcard();
        break;
      case "ArrowRight":
        nextFlashcard();
        break;
      default:
        break;
    }
  };

  function fetchCards() {
    axios
      .get(`https://testme.cyclic.app/retrieve/set/${setID}`)
      .then((res) => {
        setFetchedFlashcards(res.data.flashcards);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("FETCHED CARDS", fetchedFlashcards);
  }

  useEffect(() => {
    inputFlashcardOne();
  }, [count]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <main className="min-h-screen">
        <section className="flex flex-col justify-center items-center">
          <div>{/* <h1>SET ID: {setID}</h1> */}</div>
        </section>

        <section className="min-h-screen flex justify-center items-center">
          <motion.div
            className="bg-stone-700 p-10 flex lg:w-6/12 w-9/12 flex-col items-center rounded-lg shadow-2xl"
            initial={{ opacity: 0 }}
            animate={{ rotateY: viewFlashcard ? 360 : 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{ backfaceVisibility: "hidden" }}
          >
            {viewFlashcard ? (
              <div
                className=" flex flex-col rounded-xl p-2 justify-center items-center"
                onKeyDown={handleKeyDown}
              >
                <h1 className="text-2xl lg:text-5xl font-bold text-white">
                  {message ? message : displayFlashcard[0].title}
                </h1>
                {endOfSet ? (
                  <div className="flex flex-col justify-center items-center">
                    <button
                      className="text-xl font-bold rounded-xl shadow-2xl bg-stone-500 p-2 mt-2 text-white"
                      onClick={goBack}
                    >
                      Go back
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col justify-center items-center"></div>
                )}
                <div className="flex flex-row mt-6 gap-10 items-center">
                  <div className="px-2">
                    <button
                      onClick={previousFlashcard}
                      className="outline-none"
                    >
                      <h1 className="text-2xl font-bold text-white">
                        <BsArrowLeft />
                      </h1>
                    </button>
                  </div>
                  <div className="px-2">
                    <button onClick={toggleView} className="outline-none">
                      <h1 className="text-2xl font-bold text-white">
                        <BsArrowCounterclockwise />
                      </h1>
                    </button>
                  </div>
                  <div className="px-2">
                    <button onClick={nextFlashcard} className="outline-none">
                      <h1 className="text-2xl font-bold text-white">
                        <BsArrowRight />
                      </h1>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col rounded-xl p-2 justify-center items-center">
                <h1 className="text-2xl lg:text-5xl font-bold text-white">
                  {message ? message : displayFlashcard[0].definition}
                </h1>
                {endOfSet ? (
                  <div className="flex flex-col justify-center items-center">
                    <button
                      className="text-xl font-bold rounded-xl shadow-2xl bg-stone-500 p-2 mt-2 text-white"
                      onClick={goBack}
                    >
                      Go back
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col justify-center items-center"></div>
                )}
                <div className="flex flex-row mt-6 gap-10 items-center">
                  <div className="px-2">
                    <button
                      onClick={previousFlashcard}
                      className="outline-none"
                    >
                      <h1 className="text-2xl font-bold text-white">
                        <BsArrowLeft />
                      </h1>
                    </button>
                  </div>
                  <div className="px-2">
                    <button onClick={toggleView} className="outline-none">
                      <h1 className="text-2xl font-bold text-white">
                        <BsArrowCounterclockwise />
                      </h1>
                    </button>
                  </div>
                  <div className="px-2">
                    <button onClick={nextFlashcard} className="outline-none">
                      <h1 className="text-2xl font-bold text-white">
                        <BsArrowRight />
                      </h1>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </section>
      </main>
    </motion.div>
  );
}

export default StudyFlashcards;
