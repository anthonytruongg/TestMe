import { Routes, Route, useLocation } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";

import { AnimatePresence } from "framer-motion";

import Landing from "./pages/NewUsers/Landing";
import Register from "./pages/NewUsers/Register";
import ThankYou from "./pages/Misc/ThankYou";
import SignIn from "./pages/NewUsers/SignIn";
import Home from "./pages/Main/Home";
import CreateSets from "./pages/Main/CreateSets";
import CreateFlashcard from "./pages/Main/CreateFlashcard";
import About from "./pages/Misc/About";
import NotFound from "./pages/Misc/NotFound";
import TokenExpire from "./pages/Misc/TokenExpire";
import Flashcards from "./pages/Main/Flashcards";
import VerifyUser from "./pages/Misc/VerifyUser";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <div>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/success" element={<ThankYou />} />
          <Route path="/register/verify" element={<VerifyUser />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/session/expire" element={<TokenExpire />} />
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/create" element={<CreateSets />} />
            <Route path="/create/flashcards" element={<CreateFlashcard />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
