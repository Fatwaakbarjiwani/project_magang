import { useDispatch, useSelector } from "react-redux";
import profile from "../assets/profile.svg";
import search from "../assets/search.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import menu from "../assets/menu.svg";
import {
  setShowLogin,
  setShowLogout,
  setShowModal,
} from "../redux/reducers/modalReducer";
import ButtonMenu from "./ButtonMenu";
import { useState } from "react";
import { setSearchCampaign } from "../redux/reducers/campaignReducer";

export default function Navbar({ url }) {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);
  const { searchCampaign } = useSelector((state) => state.campaign);
  const [buttonMenu, setButtonMenu] = useState(false);
  const tombol = () => {
    setButtonMenu(!buttonMenu);
  };

  return (
    <div>
      {/* dekstop */}
      <div className="hidden md:block bg-white drop-shadow-lg fixed w-full text-sm md:text-lg lg:text-xl z-40 top-0 ">
        <div className="mx-2 lg:mx-8 xl:mx-16 p-2 xl:p-3 flex justify-between items-center">
          <button className="text-start text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-green-600">
            <Link to={"/"}>
              CARE <span className="text-GREENDARK">US</span>
            </Link>
          </button>
          <div className="flex justify-between pl-3 pr-2 xl:py-1 xl:px-2 w-[25%] md:w-2/6 rounded-full ring-gray-600 ring-1 focus:ring-gray-600">
            <input
              className="focus:outline-none w-full text-xm md:text-base lg:text-lg"
              type="text"
              value={searchCampaign}
              onChange={(e) => dispatch(setSearchCampaign(e.target.value))}
            />
            <img src={search} className="w-5" alt="" />
          </div>
          <div className="justify-between flex gap-2 md:gap-2 lg:gap-3 xl:gap-5 text-xs md:text-sm lg:text-base xl:text-xl font-Inter">
            <button
              className={`font-bold hover:underline hover:underline-offset-[2vh] ${
                url === "detailZISWAF"
                  ? "text-green-600 underline underline-offset-[2vh]"
                  : "text-black"
              }`}
            >
              <Link to={"/detailZiswaf/detailZISWAF"}>Ziswaf</Link>
            </button>
            <button
              className={`font-bold hover:underline hover:underline-offset-[2vh] ${
                url === "detailDonasi"
                  ? "text-green-600 underline underline-offset-[2vh]"
                  : "text-black"
              }`}
            >
              <Link to={"/detailDonasi/detailDonasi"}>Campaign</Link>
            </button>
            <button
              className={`font-bold hover:underline hover:underline-offset-[2vh] ${
                url === "berita"
                  ? "text-green-600 underline underline-offset-[2vh]"
                  : "text-black"
              }`}
            >
              <Link to={"/berita/berita"}>Berita</Link>
            </button>
            <button className="font-bold hover:underline hover:underline-offset-[2vh]">
              Layanan
            </button>
          </div>
          <div className="hover:scale-105 block lg:hidden" onClick={tombol}>
            <img src={menu} alt="" />
          </div>
          {buttonMenu == true && <ButtonMenu token={token} profile={profile} />}

          {user ? (
            <div className="lg:flex gap-3 hidden">
              <div className="flex md:gap-2 hover:scale-105">
                <img src={profile} alt="" />
                <button className="font-Inter text-black md:text-base lg:text-lg xl:text-xl font-bold">
                  Profile
                </button>
              </div>
              <button
                className="font-Inter bg-red-600 md:px-3 lg:px-5 md:py-1 rounded-full font-bold md:text-base lg:text-lg xl:text-xl text-white hover:scale-105"
                onClick={() => dispatch(setShowLogout(true))}
              >
                LogOut
              </button>
            </div>
          ) : (
            <div className="lg:flex gap-3 hidden">
              <div className="flex md:gap-2 hover:scale-105">
                <img src={profile} alt="" />
                <button
                  className="font-Inter text-black md:text-base lg:text-lg xl:text-xl font-bold"
                  onClick={() => dispatch(setShowLogin(true))}
                >
                  Masuk
                </button>
              </div>
              <button
                className="font-Inter bg-GREENDARK md:px-3 lg:px-5 md:py-1 rounded-full font-bold md:text-base lg:text-lg xl:text-xl text-white hover:scale-105"
                onClick={() => dispatch(setShowModal(true))}
              >
                Daftar
              </button>
            </div>
          )}
        </div>
      </div>
      {/* mobile */}
      <div className="fixed bottom-0 hidden bg-white w-full px-5 py-3 items-center">
        <div className="flex justify-center">
          <button className="text-start text-lg font-bold text-green-600">
            <Link to={"/"}>
              CARE <span className="text-GREENDARK">US</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
Navbar.propTypes = {
  url: PropTypes.string,
};
