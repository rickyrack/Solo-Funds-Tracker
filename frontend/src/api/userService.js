import axios from "axios";
import { auth } from '../firebase';

const getAuthToken = async () => {
  try {
    const idToken = await auth.currentUser.getIdToken(/* forceRefresh */ true)
      // Send token to your backend via HTTPS
      return `Bearer ${idToken}`;
  } catch (error) {
    console.log('userService error here');
  }
}

const authToken = await getAuthToken();

const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": `${authToken}`
  }
});

const path = "/api/users";

export const addUser = async (data) => {
  return api.post("/api/users", {
    email: data.email,
    password: data.password,
    displayName: data.displayName,
  });
};

export const getUser = async () => {
  return api.get(path, {
    /* params: {
      email: email,
    },*/
  });
};
