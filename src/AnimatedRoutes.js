import Home from "./pages/Home";
import About from "./pages/About";
import CreateSets from "./pages/CreateSets";
import CreateFlashcard from "./pages/CreateFlashcard";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";
import ThankYou from "./pages/Misc/ThankYou";
import { Routes, Route, useLocation } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";

import { AnimatePresence } from "framer-motion";
import Landing from "./pages/Landing";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <div>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/success" element={<ThankYou />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />} />
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
