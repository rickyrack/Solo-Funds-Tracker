import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

const path = "/api/users";

export const addUser = async (data) => {
  return api.post("/api/users", {
    email: data.email,
    password: data.password,
    displayName: data.displayName,
  });
};

export const getUser = async (email) => {
  console.log("userService.js - user's email:");
  console.log(email);
  return api.get(path, {
    params: {
      email: email,
    },
  });
};
