import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineInformationCircle,
  HiOutlineLogout,
} from "react-icons/hi";
import { IoCreateOutline } from "react-icons/io5";

function Navbar() {
  const navigate = useNavigate();

  const email = localStorage.getItem("user-email");

  const logout = () => {
    localStorage.clear();
    navigate("/signin", { replace: true });
  };

  useEffect(() => {
    setTimeout(() => {
      logout();
      // logout after 4 hours
    }, 14400000);
  });

  return (
    <main className="bg-stone-200 text-2xl p-1 lg:text-5xl lg:p-4">
      <div className="flex flex-row text-stone-500 items-center justify-between">
        <Link
          to="/home"
          className="hover:scale-110 hover:-translate-y-2 transition ease-in-out p-1"
        >
          <HiOutlineHome />
        </Link>
        <Link
          to="/about"
          className="hover:scale-110 hover:-translate-y-2 transition ease-in-out p-1"
        >
          <HiOutlineInformationCircle />
        </Link>
        <Link
          to="/create"
          className="hover:scale-110 hover:-translate-y-2 transition ease-in-out p-1"
        >
          <IoCreateOutline />
        </Link>
        <button
          className="hover:scale-110 hover:-translate-y-2 transition ease-in-out p-1"
          onClick={logout}
        >
          <HiOutlineLogout />
        </button>
      </div>
    </main>
  );
}

export default Navbar;

// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// function Navbar() {
//   const navigate = useNavigate();

//   const email = localStorage.getItem("user-email");

//   const logout = () => {
//     localStorage.clear();
//     navigate("/signin", { replace: true });
//   };

//   return (
//     <nav className="flex justify-between p-3 items-center bg-gray-300 font-Jost font-semibold text-2xl">
//       <div className="">
//         <Link to="/home">TestMe</Link>
//         <p>{email}</p>
//       </div>
//       <div className="flex flex-col">
//         <ul>
//           <li>
//             <Link
//               to="/about"
//               className="hover:scale-110 hover:-translate-y-2 transition ease-in-out p-1"
//             >
//               About
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/create"
//               className="hover:scale-110 hover:-translate-y-2 transition ease-in-out p-1"
//             >
//               Create
//             </Link>
//           </li>
//           <li>
//             <button
//               className="hover:scale-110 hover:-translate-y-2 transition ease-in-out p-1"
//               onClick={logout}
//             >
//               Sign Out
//             </button>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
