import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setMessage("");
    console.log("[SIGNIN.js] email: ", email);
    console.log("[SIGNIN.js] password: ", password);
    axios
      .post("http://localhost:3001/user/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        // set login success message
        setMessage(res.data.message);
        // clear local storage of any prior existing keys
        localStorage.clear();
        localStorage.setItem("user-token", res.data.token);
        localStorage.setItem("user-email", email);
        localStorage.setItem("user-id", res.data.id);
        localStorage.setItem("user-name", res.data.username);

        if (res.data.message === "Successfully logged in!") {
          setTimeout(() => {
            navigate("/home", {
              state: { email: email },
            });
          }, 1500);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 160,
        damping: 20,
      }}
    >
      <main>
        <section>
          <div className="flex flex-col justify-center items-center w-screen h-screen">
            <div className="bg-slate-200 p-10 w-80 shadow-2xl rounded-xl">
              <h1 className="font-semibold text-2xl text-slate-600 lg:text-5xl font-Jost m-2">
                Log in to TestMe
              </h1>
              <p className="text-sm py-4 lg:py-8 lg:text-lg font-Jost text-slate-600 font-light p-2">
                Log in to your account to access your study materials.
              </p>
              <form
                action=""
                className="flex flex-col items-start gap-2"
                onSubmit={handleSubmit}
              >
                <label
                  htmlFor=""
                  className="text-stone-500 font-medium lg:font-bold"
                >
                  E-Mail
                </label>
                <input
                  type="email"
                  className="outline-none font-light font-Barlow p-1 bg-transparent outline-neutral-300 rounded-md w-60 lg:text-xl "
                  placeholder=""
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  htmlFor=""
                  className="text-stone-500 font-medium lg:font-bold"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="outline-none font-light font-Barlow p-1 bg-transparent outline-neutral-300 rounded-md w-60 lg:text-xl "
                  placeholder=""
                  onChange={(e) => setPassword(e.target.value)}
                />
              </form>
              <div className="flex justify-center p-2">
                <span className="text-green-700 font-semibold font-Jost">
                  {message}
                </span>
              </div>

              <div className="flex items-center justify-center pt-3">
                <button
                  className="bg-teal-500 w-60 p-1 mb-2 rounded-lg font-Jost font-semibold text-white "
                  onClick={handleSubmit}
                >
                  Sign in
                </button>
              </div>
              <div className="pt-3">
                <p className="text-slate-600 font-Jost">
                  Don't have an account?
                  <span className="pl-2">
                    <Link to="/register" className="font-bold">
                      Register
                    </Link>
                  </span>
                </p>
                <p className="text-slate-600 font-Jost text-center pt-2">
                  <span className="pl-2">
                    <Link to="/signin" className="font-semibold">
                      Forgot your password?
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}

export default SignIn;
