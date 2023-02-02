import axios from "axios";

const instance = axios.create({
  // baseURL: "https://testme.cyclic.app",
  baseURL: "http://localhost:3001",
});

export default instance;
