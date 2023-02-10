import axios from "axios";
import { auth } from '../firebase';

const getAuthToken = async () => {
  try {
    const idToken = await auth.currentUser.getIdToken(/* forceRefresh */ true)
      // Send token to your backend via HTTPS
      console.log(idToken);
      api.defaults.headers.common['Authorization'] = `Bearer ${idToken}`;
  } catch (error) {
    console.log('userService error here');
  }
}

const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
});

const path = "/api/users";

export const addUser = async (data, firebaseUID) => {
  return api.post(path, {
    email: data.email,
    password: data.password,
    displayName: data.displayName,
    firebaseUID: firebaseUID
  });
};

export const getUser = async () => {
  await getAuthToken();
  return api.get(path, {
    /* params: {
      email: email,
    },*/
  });
};