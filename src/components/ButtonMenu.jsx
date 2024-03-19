import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  setShowLogin,
  setShowLogout,
  setShowModal,
} from "../redux/reducers/modalReducer";
export default function ButtonMenu({ token, profile }) {
  const dispatch = useDispatch();
  return (
    <div className="absolute top-11 lg:hidden bg-white p-1 right-0 rounded-b-lg drop-shadow-lg z-30">
      {" "}
      {token ? (
        <div className="flex flex-col md:gap-3 xl:gap-5">
          <div className="flex gap-2 items-center md:gap-4 hover:scale-105">
            <img src={profile} className="w-2" alt="" />
            <button className="font-Inter text-black text-sm md:text-lg lg:text-xl font-bold ">
              Profile
            </button>
          </div>
          <button
            className="font-Inter bg-red-600 px-2 py-1 md:px-5 md:py-2 rounded-full font-bold text-sm md:text-lg lg:text-xl text-white hover:scale-105"
            onClick={() => dispatch(setShowLogout(true))}
          >
            LogOut
          </button>
        </div>
      ) : (
        <div className="flex gap-2 p-2">
          <div className="flex gap-2 items-center hover:scale-105">
            <img src={profile} className="w-3" alt="" />
            <button
              className="font-Inter text-black text-sm md:text-base lg:text-lg xl:text-xl font-bold"
              onClick={() => dispatch(setShowLogin(true))}
            >
              Masuk
            </button>
          </div>
          <button
            className="font-Inter bg-GREENDARK px-4 rounded-full font-bold text-sm md:text-base lg:text-lg xl:text-xl text-white hover:scale-105"
            onClick={() => dispatch(setShowModal(true))}
          >
            Daftar
          </button>
        </div>
      )}
    </div>
  );
}
ButtonMenu.propTypes = {
  profile: PropTypes.string.isRequired,
  token: PropTypes.array.isRequired,
};
