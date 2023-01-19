import React from "react";
import Navbar from "./Navbar";
function CreateFlashcard() {
  return (
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
          <form action="" className="flex flex-col items-start gap-2 pb-2">
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
            />
          </form>
          <div className="flex gap-2 p-2">
            <button className="bg-teal-500 w-60 p-1 rounded-lg font-Jost font-semibold text-white">
              Done
            </button>
            <button className="bg-teal-500 w-60 p-1 rounded-lg font-Jost font-semibold text-white">
              Add
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CreateFlashcard;
