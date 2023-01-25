import React from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import FlashcardNavbar from "./FlashcardNavbar";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import "./Modal.css";

function Flashcards() {
  const location = useLocation();
  const { subject, flashcards } = location.state;
  const [cardsArray, setCardsArray] = useState([]);

  const user_id = localStorage.getItem("user-id");
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

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
            {flashcards.map((card, index) => {
              return (
                <div
                  key={index}
                  className="bg-violet-200 p-4 m-2 lg:m-4 text-start lg:p-10 
                  lg:w-96 w-80 hover:-translate-y-3 hover:scale-105 
                  transition ease-in-out
                  shadow-2xl rounded-xl font-Noto text-zinc-500 font-bold 
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
                            onClick={toggleModal}
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
                <h2>HELLO MODAL</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore, nam impedit. Dolorum, necessitatibus ex, deleniti
                  non praesentium dolores tenetur delectus accusamus aperiam
                  nulla cum. Ratione ad quibusdam rem laboriosam quaerat fuga,
                  officia enim dolor earum a eligendi, illum impedit iusto quod
                  mollitia voluptatum nesciunt nulla ipsum soluta id! Expedita,
                  deserunt?
                </p>
                <button className="close-modal" onClick={toggleModal}>
                  CLOSE
                </button>
              </div>
            </div>
          )}
        </section>
      </main>
    </motion.div>
  );
}

export default Flashcards;
