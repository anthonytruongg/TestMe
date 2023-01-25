import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineInformationCircle,
  HiOutlineLogout,
} from "react-icons/hi";
import { IoCreateOutline } from "react-icons/io5";
import { BiAddToQueue } from "react-icons/bi";

function FlashcardNavbar(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const { subject, flashcards } = location.state;

  function createFlashcard() {
    navigate("/create/flashcards", { replace: true, state: { subject } });
  }

  return (
    <main className="bg-neutral-100 text-2xl p-1 lg:text-5xl lg:p-4">
      <div className="flex flex-row text-gray-400 items-center justify-between">
        <Link
          to="/home"
          className="hover:scale-110 hover:-translate-y-2 transition ease-in-out p-1"
        >
          <HiOutlineHome />
        </Link>
        <button
          onClick={createFlashcard}
          className="hover:scale-110 hover:-translate-y-2 transition ease-in-out p-1"
        >
          <BiAddToQueue />
        </button>
      </div>
    </main>
  );
}

export default FlashcardNavbar;
