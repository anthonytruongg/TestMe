import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateSets() {
  const navigate = useNavigate();

  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Handling submit.");
    createSet();
    navigate("/create/flashcards", { state: { subject: subject } });
  };

  const createSet = async () => {
    const email = localStorage.getItem("user-email");
    const token = localStorage.getItem("user-token");

    axios
      .post("http://localhost:3001/create/set", {
        email: email,
        token: token,
        subject: subject,
        description: description,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <main>
      {/* <Navbar /> */}

      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <div className="bg-slate-200 p-10 w-80 shadow-2xl rounded-xl">
          <h1 className="text-2xl text-center font-Jost font-bold text-gray-600">
            Define a set
          </h1>
          <p className="text-sm py-4 lg:py-8 lg:text-lg font-Jost text-slate-600 font-light p-2">
            Define a set of flashcards specific to your subject of study.
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
              Subject / Class
            </label>
            <input
              type="text"
              className="outline-none font-light font-Barlow p-1 bg-transparent outline-neutral-300 rounded-md w-60 lg:text-xl "
              placeholder="Physics 101"
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
            <label
              htmlFor=""
              className="text-stone-500 font-medium lg:font-bold"
            >
              Description
            </label>
            <textarea
              type="text"
              className="resize-none outline-none font-light font-Barlow p-1 bg-transparent outline-neutral-300 rounded-md w-60 lg:text-xl "
              placeholder="Physics midterm"
              rows={2}
              cols={2}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </form>
          <div className="pt-2">
            <button
              onClick={handleSubmit}
              className="bg-teal-500 w-60 p-1 rounded-lg font-Jost font-semibold text-white"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CreateSets;

// import React from "react";
// import Navbar from "./Navbar";
// function Create() {
//   return (
//     <main>
//       <Navbar />

//       <div className="flex flex-col justify-center items-center w-screen h-screen">
//         <div className="bg-slate-200 p-10 w-80 shadow-2xl rounded-xl">
//           <h1 className="text-2xl text-center font-Jost font-bold text-gray-600">
//             Create a set
//           </h1>
//           <form action="" className="flex flex-col items-start gap-2 pb-2">
//             <label
//               htmlFor=""
//               className="text-stone-500 font-medium lg:font-bold"
//             >
//               Title
//             </label>
//             <input
//               type="text"
//               className="outline-none font-light font-Barlow p-1 bg-transparent outline-neutral-300 rounded-md w-60 lg:text-xl "
//               placeholder=""
//             />
//             <label
//               htmlFor=""
//               className="text-stone-500 font-medium lg:font-bold"
//             >
//               Definition
//             </label>
//             <textarea
//               type="text"
//               className="resize-none outline-none font-light font-Barlow p-1 bg-transparent outline-neutral-300 rounded-md w-60 lg:text-xl "
//               placeholder=""
//               rows={5}
//               cols={5}
//             />
//           </form>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default Create;
