import { useDispatch, useSelector } from "react-redux";
import profile from "../assets/profile.svg";
import search from "../assets/search.svg";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import menu from "../assets/menu.svg";
import beranda from "../assets/home.svg";
import Campaign from "../assets/ticketstar.svg";
import Ziswaf from "../assets/heart.svg";
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
  // const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);
  const { searchCampaign } = useSelector((state) => state.campaign);
  const [buttonMenu, setButtonMenu] = useState(false);
  const navigate = useNavigate();
  const tombol = () => {
    setButtonMenu(!buttonMenu);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = searchCampaign.trim();
    if (searchQuery === "") {
      // Jika input kosong, arahkan ke halaman beranda atau URL yang sesuai.
      navigate("/");
    } else {
      const searchUrl = `/pencarian/${searchQuery}`;
      navigate(searchUrl);
    }
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
          <div className=" pl-3 pr-2 xl:py-1 xl:px-2 w-[25%] md:w-2/6 rounded-full ring-gray-600 ring-1 focus:ring-gray-600">
            <form
              className="flex justify-between"
              onSubmit={handleSearch}
              action=""
            >
              <input
                className="focus:outline-none w-full text-xm lg:text-lg"
                type="text"
                placeholder="Jelajahi Campaign"
                value={searchCampaign}
                onChange={(e) => dispatch(setSearchCampaign(e.target.value))}
              />
              <img src={search} className="w-5" alt="" />
            </form>
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
          {buttonMenu == true && <ButtonMenu user={user} profile={profile} />}

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
      <div className="p-1 md:hidden bg-white flex items-center gap-2 drop-shadow fixed w-full text-sm md:text-lg lg:text-xl z-40 top-[-3px]">
        <div className="w-full p-2 bg-white ">
          <form className="flex justify-between" onSubmit={handleSearch}>
            <input
              className="outline-none w-full text-xm lg:text-lg"
              type="text"
              placeholder="Jelajahi Campaign"
              value={searchCampaign}
              onChange={(e) => dispatch(setSearchCampaign(e.target.value))}
            />
            <img src={search} className="w-5" alt="" />
          </form>
        </div>
        <div className="hover:scale-105 mx-4" onClick={tombol}>
          <img src={menu} alt="" />
        </div>
        {buttonMenu == true && <ButtonMenu user={user} profile={profile} />}
      </div>
      {/* bawah */}
      <div className="fixed sm:hidden bottom-0 bg-white w-full py-2 px-3 items-center z-40 items-center rounded-lg">
        <div className="flex justify-between items-end ">
          <button className="text-start text-base font-bold ">
            <Link
              className="flex flex-col justify-center items-center"
              to={"/"}
            >
              <img src={beranda} alt="" />
              <p className="text-WHITE01 ">Beranda</p>
            </Link>
          </button>

          <button className="text-start text-base font-bold ">
            <Link
              className="flex flex-col justify-center items-center"
              to={"/detailDonasi/detailDonasi"}
            >
              <img src={Campaign} alt="" />
              <p className="text-WHITE01 ">Campaign</p>
            </Link>
          </button>

          <button className="text-start text-base font-bold ">
            <Link
              className="flex flex-col justify-center items-center"
              // to={"/detailZiswaf/detailZISWAF"}
            >
              <img src={Ziswaf} alt="" />
              <p className="text-WHITE01 ">Ziswaf</p>
            </Link>
          </button>

          <button className="text-start text-base font-bold ">
            <Link
              className="flex flex-col justify-center items-center"
              to={"/"}
            >
              <img src={profile} alt="" />
              <p className="text-WHITE01 ">Profil</p>
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
