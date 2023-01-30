import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { IoTrashBinOutline } from "react-icons/io5";
import { BiAddToQueue } from "react-icons/bi";
import axios from "axios";

function FlashcardNavbar(props) {
  const location = useLocation();
  const navigate = useNavigate();

  const set_ID = props.set_ID;
  const { subject } = location.state;

  const [modal, setModal] = useState(false);
  const [setID, setSetID] = useState("");

  const toggleModal = (id) => {
    setModal(!modal);
    setSetID(id);
    console.log(setID);
  };

  function createFlashcard() {
    navigate("/create/flashcards", {
      state: { setID: set_ID, subject: subject },
    });
  }

  const deleteSet = async () => {
    await axios
      .delete(`http://localhost:3001/delete/set/${set_ID}`)
      .then((res) => {
        console.log(res.data);
        navigate("/home", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className="bg-neutral-100 text-2xl p-1 lg:text-5xl lg:p-4">
      {/* {set_ID} <- this ID needs to be passed! */}
      <div className="flex flex-row text-gray-400 items-center justify-between">
        <Link
          to="/home"
          className="hover:scale-110 hover:-translate-y-2 transition ease-in-out p-1"
        >
          <HiOutlineHome />
        </Link>
        <button className="hover:scale-110 hover:-translate-y-2 transition ease-in-out p-1">
          <IoTrashBinOutline onClick={(e) => toggleModal(set_ID)} />
        </button>
        <button
          onClick={createFlashcard}
          className="hover:scale-110 hover:-translate-y-2 transition ease-in-out p-1"
        >
          <BiAddToQueue />
        </button>
      </div>
      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <h1 className="text-2xl lg:text-5xl text-center mb-4 font-Jost font-bold text-gray-600">
              Are you sure you want to delete this set?
            </h1>
            <p className="text-center font-Jost text-red-500 mb-4">
              This action cannot be undone!
            </p>
            <div className="flex justify-between p-1">
              <button
                onClick={toggleModal}
                className=" p-1 font-Barlow text-black"
              >
                Cancel
              </button>
              <button
                onClick={deleteSet}
                className=" p-1 font-Barlow text-black"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default FlashcardNavbar;
