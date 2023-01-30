import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LandingNavbar from "./LandingNavbar";

function Landing() {
  const navigate = useNavigate();
  const token = localStorage.getItem("user-token");

  useEffect(() => {
    if (token) {
      navigate("/home", { replace: true });
    }
  });

  return (
    <main className="">
      <LandingNavbar />
      <div className="flex flex-col justify-center items-center h-screen "></div>
    </main>
  );
}

export default Landing;

// import React, { useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";

// function Landing() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("user-token");

//   useEffect(() => {
//     if (token) {
//       navigate("/home", { replace: true });
//     }
//   });

//   return (
//     <div className="">
//       <div className="flex flex-col justify-center items-center h-screen ">
//         <div className="p-10 flex w-80 flex-col items-center bg-slate-200 rounded-lg shadow-2xl ">
//           <h1 className="text-4xl p-4 m-6 lg:p-10 lg:m-10 lg:text-6xl text-slate-600 font-Jost font-semibold">
//             TestMe!
//           </h1>
//           <div className="flex flex-col gap-2 text-center lg:text-2xl ">
//             <Link
//               to="/signin"
//               className="bg-slate-300 font-Jost p-2 rounded-xl hover:bg-teal-200 hover:-translate-y-1 transition ease-in-out text-white font-medium"
//             >
//               Sign In
//             </Link>
//             <Link
//               to="/register"
//               className="bg-slate-300 font-Jost p-2 rounded-xl hover:bg-teal-200 hover:-translate-y-1 transition ease-in-out text-white font-medium"
//             >
//               Register
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Landing;
