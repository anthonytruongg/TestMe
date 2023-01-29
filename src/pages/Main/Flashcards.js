import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FlashcardNavbar from "./FlashcardNavbar";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import axios from "axios";
import "./Modal.css";

function Flashcards() {
  const location = useLocation();
  const { subject, flashcards, set_ID } = location.state;
  const [cardsArray, setCardsArray] = useState([]);

  const [title, setTitle] = useState("");
  const [definition, setDefinition] = useState("");
  const [message, setMessage] = useState("");

  const [ID, setID] = useState("");

  const user_id = localStorage.getItem("user-id");
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);

  const toggleModal = (id) => {
    // console.log(id);
    setID(id);
    setModal(!modal);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:3001/update/flashcard/${ID}`, {
        title: title,
        definition: definition,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(ID);
  };

  function fetchCards() {
    axios
      .get(`http://localhost:3001/user/sets/retrieve/${set_ID}`)
      .then((res) => {
        console.log(res.data.flashcards);
        // setCardsArray(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    console.log(set_ID);
  });

  // card._id <- id of card, use this to display a modal and edit a specific flashcard
  // after adding modal functionality, i need to pass the card ID when a user clicks the
  // edit button, that way it presents a new form for them to edit the card.
  // the card ID should be passed to the modal component, and then the ID can be
  // used to update the information on the backend after the form is submitted and a
  // POST req is sent to the backend.

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <main>
        <FlashcardNavbar />
        <section className="min-h-screen p-4">
          <div
            className="flex flex-col justify-center items-center 
          lg:grid lg:grid-cols-4 lg:grid-rows-6"
          >
            <button onClick={fetchCards}>FETCH CARDS</button>
            {flashcards.map((card, index) => {
              return (
                <div
                  key={index}
                  className="bg-violet-400 p-4 m-2 lg:m-4 text-start lg:p-10 
                  lg:w-96 w-80 hover:-translate-y-3 hover:scale-105 
                  transition ease-in-out
                  shadow-2xl rounded-xl font-Jost text-white
                  text-ellipsis overflow-clip"
                >
                  <div className="flex flex-row justify-between gap-8 p-1">
                    <div className="px-2">
                      <p>{card.title}</p>
                    </div>
                    <div className="">
                      <p>{card.definition}</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="">
                        <p>
                          <MdOutlineModeEditOutline
                            onClick={(e) => toggleModal(card._id)}
                            className="text-2xl"
                          />
                        </p>
                      </div>
                      <div className="">
                        <p>
                          <BsTrash className="text-2xl" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {modal && (
            <div className="modal">
              <div className="overlay"></div>
              <div className="modal-content">
                <h1 className="text-2xl text-center mb-4 font-Jost font-bold text-gray-600">
                  Edit existing card
                </h1>
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
                <div className="flex justify-between p-1">
                  <button
                    onClick={toggleModal}
                    className="w-20 p-1 rounded-lg font-Jost font-light text-black"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="w-20 p-1 rounded-lg font-Jost font-light text-black"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </motion.div>
  );
}

export default Flashcards;
