import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

function Register() {
  const registerEndpoint = "https://testme.cyclic.app/user/register";

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState("password");

  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
    all: "",
  });

  const handleSubmit = (e) => {
    setError({
      username: "",
      email: "",
      password: "",
      all: "",
    });
    e.preventDefault();
    axios
      .post(registerEndpoint, {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        if (
          res.data === "Username already exists!" ||
          res.data === "Email already exists!"
        ) {
          setError({ all: res.data });
        }
        if (res.data === "Please fill out all fields!") {
          setError({ all: res.data });
        }
        if (res.data === "Username must be at least 3 characters long!") {
          setError({ username: res.data });
        }
        if (res.data === "Password must be at least 6 characters long!") {
          setError({ password: res.data });
        }
        if (res.data === "Please enter a valid email!") {
          setError({ email: res.data });
        }
        if (res.data === "User registered!") {
          axios.post(
            "https://testme.cyclic.app/user/register/sendconfirmation",
            {
              username: username,
              email: email,
            }
          );
          // console.log("navigate");
          setTimeout(() => {
            navigate("/register/success");
          }, 1000);
        }
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  function toggleShow() {
    if (toggle === "password") {
      setToggle("text");
    }
    if (toggle === "text") {
      setToggle("password");
    }
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
                Sign up today!
              </h1>
              <p className="text-sm py-4 lg:py-8 lg:text-lg font-Jost text-slate-600 font-light p-2">
                Register now for{" "}
                <span className="text-teal-500 text-sm lg:text-lg font-bold underline">
                  FREE
                </span>{" "}
                access to study materials.
              </p>
              <form
                action=""
                className="flex flex-col items-start gap-2 pb-2"
                onSubmit={handleSubmit}
              >
                <label
                  htmlFor=""
                  className="text-stone-500 font-medium lg:font-bold"
                >
                  Username
                </label>
                <span className="text-red-600 font-Jost font-">
                  {error.username}
                </span>
                <input
                  type="text"
                  value={username}
                  className="outline-none font-light font-Barlow p-1 bg-transparent outline-neutral-300 rounded-md w-60 lg:text-xl "
                  placeholder="johndoe"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label
                  htmlFor=""
                  className="text-stone-500 font-medium lg:font-bold"
                >
                  E-Mail
                </label>
                <span className="text-red-600 font-Jost font-">
                  {error.email}
                </span>
                <input
                  type="email"
                  value={email}
                  className="outline-none font-light font-Barlow p-1 bg-transparent outline-neutral-300 rounded-md w-60 lg:text-xl "
                  placeholder="johndoe@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  htmlFor=""
                  className="text-stone-500 font-medium lg:font-bold"
                >
                  Password
                </label>
                <span className="text-red-600 font-Jost font-">
                  {error.password}
                </span>
                <input
                  type={toggle}
                  value={password}
                  className="outline-none font-light font-Barlow p-1 bg-transparent outline-neutral-300 rounded-md w-60 lg:text-xl "
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="text-red-600 font-Jost font-">
                  {error.all}
                </span>
                <div className="flex gap-2 pt-2">
                  <input type="checkbox" onClick={toggleShow} />
                  <label htmlFor="" className="text-sm font-light font-Jost">
                    Show password
                  </label>
                </div>
              </form>
              <div className="flex items-center justify-center p-2">
                <button
                  className="bg-teal-500 w-60 p-1 rounded-lg font-Jost font-semibold text-white "
                  onClick={handleSubmit}
                >
                  Register
                </button>
              </div>
              <div className="pt-2">
                <p className="text-slate-600 font-Jost">
                  Already have an account?
                  <span className="pl-2">
                    <Link to="/signin" className="font-bold">
                      Log In
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

export default Register;
