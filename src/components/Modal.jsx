import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../redux/reducers/modalReducer";
import modal from "../assets/modal.svg";
import google from "../assets/google.svg";
import close from "../assets/keluar.svg";
import { useState } from "react";
import { register } from "../redux/action/auth.Action";
// import { useNavigate } from "react-router-dom";

export default function Modal() {
  const { showModal } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [role, setRole] = useState("");
  const { user } = useSelector((state) => state.auth);

  // const navigate = useNavigate();
  const handleRegister = () => {
    dispatch(register(userName, phoneNumber, password, confirmPassword, ""));
    if (user != null) {
      window.location.reload;
    }
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="bg-black/50 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto">
              <div
                style={{
                  backgroundImage: `url(${modal})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="flex justify-center p-10 rounded-3xl bg-white "
              >
                <div className="bg-white rounded-3xl p-5 font-Inter ">
                  <div className="flex justify-between items-center">
                    <div className="flex justify-end  w-4/6">
                      <h1 className="text-2xl font-bold text-GREENDARK">
                        CARE <span className="text-green-600">US</span>
                      </h1>
                    </div>
                    <button
                      className="rounded-full p-1 text-white hover:scale-105"
                      onClick={() => dispatch(setShowModal(false))}
                    >
                      <img src={close} className="w-6 h-6" alt="" />
                    </button>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col ">
                      <label
                        htmlFor="name"
                        className="font-semibold text-lg text-gray-500"
                      >
                        Nama
                      </label>
                      <input
                        type="text"
                        className="rounded-xl ring-2 ring-gray-600 focus:outline-none w-full text-lg py-1 px-5"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col ">
                      <label
                        htmlFor="name"
                        className="font-semibold text-lg text-gray-500"
                      >
                        No Telepon
                      </label>
                      <input
                        type="text"
                        className="rounded-xl ring-2 ring-gray-600 focus:outline-none w-full text-lg py-1 px-5"
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
                        className="rounded-xl ring-2 ring-gray-600 focus:outline-none w-full text-lg py-1 px-5"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col ">
                      <label
                        htmlFor="name"
                        className="font-semibold text-lg text-gray-500"
                      >
                        Konfirmasi Kata Sandi
                      </label>
                      <input
                        type="text"
                        className="rounded-xl ring-2 ring-gray-600 focus:outline-none w-full text-lg py-1 px-5"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* button */}
                  <button
                    onClick={handleRegister}
                    className="w-full bg-GREENDARK text-lg text-white mt-8 rounded-3xl px-5 py-2 hover:scale-105"
                  >
                    Daftar
                  </button>
                  <div className="flex justify-center mt-3">
                    <p>atau masuk dengan</p>
                  </div>
                  <button className="font-bold p-1 flex gap-2 text-gray-600 items-center w-full bg-transparent text-lg justify-center ring-1 ring-black rounded-3xl hover:scale-105 mt-3">
                    <img src={google} alt="" /> Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
