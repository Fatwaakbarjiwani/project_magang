import axios from "axios";
import { setToken, setUser } from "../reducers/authReducer";
export const VITE_API_URL = import.meta.env.VITE_API_CAREUS;
// import { Toast } from "react-toastify/dist/components";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { setShowLogin } from "../reducers/modalReducer";

export const logout = () => (dispatch) => {
  dispatch(setToken(null));
  dispatch(setUser(null));
};
export const register =
  (username, phoneNumber, password, role) => async (dispatch) => {
    try {
      const response = await axios.post(`${VITE_API_URL}/auth/signup`, {
        username: username,
        phoneNumber: phoneNumber,
        password: password,
        role: [`${role}`],
      });
      const data = response;
      dispatch(setUser(data));
      if (response) {
        window.location.reload();
      }
    } catch (error) {
      console.error("Error fetching campaign data:", error);
    }
  };
export const login = (phoneNumber, password) => async (dispatch) => {
  // console.log(phoneNumber,password);
  try {
    const response = await axios.post(`${VITE_API_URL}/auth/signin`, {
      phoneNumber: phoneNumber,
      password: password,
    });
    const data = response.data;
    dispatch(setUser(data));
    if (response) {
      toast.success("Berhasil Login");
      setTimeout(() => {
        dispatch(setShowLogin(false));
      }, 2000); // Menunggu 3 detik sebelum mengubah setShowLogin
    }
  } catch (error) {
    console.error("Error fetching campaign data:", error);
  }
};
