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
