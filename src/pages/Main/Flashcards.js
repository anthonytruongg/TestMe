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

  const { set_ID, subject, description } = location.state;
  const [flashcards, setFlashcards] = useState([]);

  // editing flashcard
  const [title, setTitle] = useState("");
  const [definition, setDefinition] = useState("");
  const [message, setMessage] = useState("");

  // updating flashcard
  const [ID, setID] = useState("");

  const user_id = localStorage.getItem("user-id");
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const toggleModal = (id, title, definition) => {
    setID(id);
    setModal(!modal);
    setTitle(title);
    setDefinition(definition);
  };

  const toggleDeleteModal = (id) => {
    setID(id);
    setDeleteModal(!deleteModal);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(
        `https://flashcard-app-backend-fe63371pl-anthonytruongg.vercel.app/update/flashcard/${ID}`,
        {
          title: title,
          definition: definition,
        }
      )
      .then((res) => {
        console.log(res.data);
        fetchCards();
        toggleModal();
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(ID);
  };

  const handleDelete = async () => {
    await axios
      .delete(`https://testme.cyclic.app/delete/flashcard/${ID}`)
      .then((res) => {
        console.log(res.data);
        fetchCards();
        toggleDeleteModal();
      });
  };

  function fetchCards() {
    axios
      .get(`https://testme.cyclic.app/retrieve/set/${set_ID}`)
      .then((res) => {
        setFlashcards(res.data.flashcards);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <main className="min-h-screen">
        <FlashcardNavbar
          set_ID={set_ID}
          flashcards={flashcards}
          description={description}
        />

        <section>
          <div className="flex flex-col justify-center items-center">
            <div className=" text-white p-1 mt-2">
              {description ? (
                <h1 className="font-Barlow text-2xl font-bold lg:text-6xl text-center lg:p-2 text-stone-500">
                  {subject} | {description}
                </h1>
              ) : (
                <h1 className="font-Barlow text-2xl font-bold lg:text-6xl text-center lg:p-2 text-stone-500">
                  {subject}
                </h1>
              )}
            </div>
          </div>
        </section>

        <section className=" flex justify-center items-center">
          <div className="lg:grid lg:grid-cols-3">
            {/* <button onClick={fetchCards}>FETCH CARDS</button> */}
            {flashcards.map((card, index) => {
              return (
                <div
                  key={index}
                  className=" bg-stone-700 p-4 m-2 lg:m-2 lg:p-2 text-start
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
                            onClick={(e) =>
                              toggleModal(card._id, card.title, card.definition)
                            }
                            className="text-2xl cursor-pointer"
                          />
                        </p>
                      </div>
                      <div className="">
                        <p>
                          <BsTrash
                            onClick={(e) => toggleDeleteModal(card._id)}
                            className="text-2xl cursor-pointer"
                          />
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
          {deleteModal && (
            <div className="modal">
              <div className="overlay"></div>
              <div className="modal-content">
                <h1 className="text-2xl text-center mb-4 font-Jost font-bold text-gray-600">
                  Remove this term?
                </h1>
                <div className="flex justify-between p-1">
                  <button
                    onClick={toggleDeleteModal}
                    className="w-20 p-1 rounded-lg font-Jost font-light text-black"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDelete}
                    className="w-20 p-1 rounded-lg font-Jost font-light text-black"
                  >
                    Delete
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
