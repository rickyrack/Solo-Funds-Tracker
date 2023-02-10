import axios from "axios";
import { auth } from "../firebase";

const getAuthToken = async () => {
  try {
    console.log(auth.currentUser);
    const idToken = await auth.currentUser.getIdToken(/* forceRefresh */ true);
    // Send token to your backend via HTTPS
    console.log(idToken);
    api.defaults.headers.common["Authorization"] = `Bearer ${idToken}`;
  } catch (error) {
    console.log("loanService error here");
  }
};

const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  }
});

const path = "/api/loans";

export const getLoans = async () => {
    await getAuthToken();
    return api.get(path);
}