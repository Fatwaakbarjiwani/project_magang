import { useDispatch, useSelector } from "react-redux";
import { setShowLogin } from "../redux/reducers/modalReducer";
import modal from "../assets/modal.svg";
import close from "../assets/keluar.svg";
import LoginGoogle from "./LoginGoogle";
import { useState } from "react";
import { login } from "../redux/action/auth.Action";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const { showLogin } = useSelector((state) => state.modal);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login(phoneNumber, password));
    // if (user != null) {
    //   window.location.reload;
    // }
  };

  return (
    <>
      {showLogin ? (
        <>
          <ToastContainer autoClose={2000}></ToastContainer>
          <div className="bg-black/50 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto">
              <div
                style={{
                  backgroundImage: `url(${modal})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="flex justify-center p-5 md:p-10 rounded-3xl bg-white "
              >
                <div className="bg-white rounded-3xl p-5 font-Inter ">
                  <div className="flex justify-between items-center">
                    <div className="flex justify-end w-4/6">
                      <h1 className="text-2xl font-bold text-GREENDARK">
                        CARE <span className="text-green-600">US</span>
                      </h1>
                    </div>
                    <button
                      className="rounded-full p-1 text-white hover:scale-105"
                      onClick={() => dispatch(setShowLogin(false))}
                    >
                      <img src={close} className="w-6 h-6" alt="" />
                    </button>
                  </div>
                  <div className="flex flex-col gap-2 md:gap-3">
                    <div className="flex flex-col ">
                      <label
                        htmlFor="name"
                        className="font-semibold text-lg text-gray-500"
                      >
                        No Telepon
                      </label>
                      <input
                        type="text"
                        className="rounded-md md:rounded-xl ring-2 ring-gray-600 focus:outline-none w-full text-lg py-1 px-5"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col ">
                      <label
                        htmlFor="name"
                        className="font-semibold text-lg text-gray-500"
                      >
                        Kata Sandi
                      </label>
                      <input
                        type="text"
                        className="rounded-md md:rounded-xl ring-2 ring-gray-600 focus:outline-none w-full text-lg py-1 px-5"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* button */}
                  <button
                    onClick={handleLogin}
                    className="w-full bg-GREENDARK text-lg text-white mt-8 rounded-md md:rounded-3xl px-5 py-1 md:py-2 hover:translate-y-[-5px] duration-300"
                  >
                    Masuk
                  </button>
                  <div className="flex justify-center mt-3">
                    <p>atau masuk dengan</p>
                  </div>
                  <LoginGoogle />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
