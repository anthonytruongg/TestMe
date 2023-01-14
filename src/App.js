import { Router } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import landing from "./util/landing.jpg";

function App() {
  return (
    <div
      className="App bg-cover"
      style={{ backgroundImage: `url(${landing})` }}
    >
      <AnimatedRoutes />
    </div>
  );
}

export default App;

// import Home from "./pages/Home";
// import About from "./pages/About";
// import CreateSets from "./pages/CreateSets";
// import CreateFlashcard from "./pages/CreateFlashcard";
// import Register from "./pages/Register";
// import SignIn from "./pages/SignIn";
// import NotFound from "./pages/NotFound";
// import ThankYou from "./pages/Misc/ThankYou";
// import { Routes, Route, useLocation } from "react-router-dom";
// import ProtectedRoutes from "./ProtectedRoutes";
// import AnimatedRoutes from "./AnimatedRoutes";
// import landing from "./util/landing.jpg";

// function App() {
//   const location = useLocation();
//   return (
//     <div
//       className="App bg-cover"
//       style={{ backgroundImage: `url(${landing})` }}
//     >
//       <Routes>
//         <Route path="/register" element={<Register />} />
//         <Route path="/register/success" element={<ThankYou />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/" element={<ProtectedRoutes />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/create" element={<CreateSets />} />
//           <Route path="/create/flashcards" element={<CreateFlashcard />} />
//           <Route path="/about" element={<About />} />
//           <Route path="*" element={<NotFound />} />
//         </Route>
//       </Routes>
//     </div>
//   );
// }

// export default App;
