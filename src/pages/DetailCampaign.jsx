import { Link, useNavigate, useParams } from "react-router-dom";
// import data from "../data";
import { useEffect, useState } from "react";
import location from "../assets/location.svg";
import fb from "../assets/facebook.svg";
import twit from "../assets/whatsapp.svg";
import ig from "../assets/instagram.svg";
// import Card from "../components/Card";
import Footer from "../components/Footer";
import pana from "../assets/pana.svg";
import user from "../assets/user.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCampaign,
  getAllCategory,
  getDetailCampaign,
} from "../redux/action/campaignAction";
import Target from "../components/Target";
import CardCarousel from "../components/CardCarousel";
import Card from "../components/Card";

export default function DetailCampaign() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [button, setButton] = useState("Detail");
  const { campaign } = useSelector((state) => state.campaign);
  const { allCategory } = useSelector((state) => state.campaign);
  const { detailCampaign } = useSelector((state) => state.campaign);
  const dispatch = useDispatch();
  const { categoryCampaign } = useSelector((state) => state.campaign);

  const donasi = (id) => {
    navigate(`/pembayaran/${id}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      dispatch(getDetailCampaign(id));
      dispatch(getAllCampaign());
      dispatch(getAllCategory());
    }
  }, [id, dispatch]);

  const shareToWhatsApp = (url) => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      url
    )}`;
    window.open(whatsappUrl);
  };

  const shareToFacebook = (url) => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`;
    window.open(facebookUrl);
  };

  const shareToInstagram = () => {
    const instagramUrl = `https://www.instagram.com/username/?hl=id`;
    window.open(instagramUrl);
  };

  const shareUrl = `/detailCampaign/${id}`;

  return (
    <div>
      {/* content */}
      <div className="font-Inter">
        <div className="flex-none md:flex justify-between xl:px-20 lg:px-10 xl:mt-32 sm:px-5 lg:mt-24 md:mt-16 font-Inter xl:gap-8 md:gap-5 gap-3">
          <div className="md:w-1/2 w-full">
            <img
              src={detailCampaign.campaignImage}
              className=" xl:h-96 w-full "
              alt=""
            />
          </div>
          <div className="md:w-3/6 w-full px-4 md:px-0">
            <p className="mt-3 md:mt-0 font-bold lg:text-4xl md:text-3xl xl:text-5xl text-2xl text-GREENDARK text-center md:text-end">
              Salurkan Donasi Kamu Dengan Mudah
            </p>
            <div className="flex flex-wrap justify-between gap-1 md:pl-5 mt-2">
              <div className="md:text-base text-sm flex gap-2 items-center">
                <p>Kategori</p>
                <p className="bg-GREENDARK text-white px-2 rounded-3xl text-xs font-semibold">
                  {categoryCampaign.categoryName}
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <img src={location} className="w-4 md:w-7" alt="" />
                <p className="md:text-base text-sm">
                  {detailCampaign.location}
                </p>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-wrap justify-between mt-1 sm:mt-3 md:pl-5">
              <div>
                <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                  Terkumpul
                </p>
                <p className="text-black md:text-lg text-sm md:text-base lg:text-xl font-semibold">
                  Rp.{detailCampaign.currentAmount}
                </p>
              </div>
              <div>
                <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                  Dana Dibutuhkan
                </p>
                <p className="text-black md:text-lg text-sm md:text-base lg:text-xl font-semibold">
                  Rp.{detailCampaign.targetAmount}
                </p>
              </div>
            </div>
            {/* target */}
            <div className="md:pl-5 lg:mt-2 mt-1">
              <Target
                targetAmount={detailCampaign.targetAmount}
                amountCampaign={detailCampaign.currentAmount}
              />
            </div>
            {/*  */}
            <div className="flex gap-3 md:justify-between items-center md:pl-5 mt-3">
              <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                Sisa Waktu :
              </p>
              <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                {detailCampaign.startDate} Sampai {detailCampaign.endDate}
              </p>
            </div>
            {/*  */}
            <div className="flex flex-wrap items-center gap-2 lg:gap-3 md:pl-5 mt-1">
              <p className="text-gray-600 md:text-base text-sm lg:text-lg">
                Bagikan Campaign
              </p>
              <div className="flex gap-1">
                <button
                  onClick={() => shareToFacebook(shareUrl)}
                  className="bg-GREENDARK2 rounded-full w-8 h-8 xl:w-10 xl:h-10 flex justify-center items-center hover:scale-110"
                >
                  <img src={fb} alt="" />
                </button>
                <button
                  onClick={() => shareToWhatsApp(shareUrl)}
                  className="bg-GREENDARK2 rounded-full w-8 h-8 xl:w-10 xl:h-10 flex justify-center items-center hover:scale-110"
                >
                  <img src={twit} alt="" />
                </button>
                <button
                  onClick={() => shareToInstagram(shareUrl)}
                  className="bg-GREENDARK2 rounded-full w-8 h-8 xl:w-10 xl:h-10 flex justify-center items-center hover:scale-110"
                >
                  <img src={ig} alt="" />
                </button>
              </div>
            </div>
            {/*  */}
            <div className="w-full md:pl-5 mt-5">
              <button
                className="w-full bg-GREENDARK font-bold md:text-base text-sm md:text-base lg:text-lg rounded-sm md:rounded-full text-white p-1 lg:p-2 hover:translate-y-[-5px] duration-300"
                onClick={() => donasi(id)}
              >
                Donasi Sekarang
              </button>
            </div>
          </div>
        </div>
        {/* button */}
        <div className="mt-5 flex gap-5 justify-center">
          <button
            onClick={() => setButton("Detail")}
            className={`${
              button == "Detail"
                ? "bg-GREENDARK text-white"
                : "text-GREENDARK bg-white"
            } ring-2 ring-GREENDARK rounded-full px-5 py-1 fort-semibold md:text-base text-sm lg:text-lg hover:bg-GREENDARK hover:text-white`}
          >
            Detail
          </button>
          <button
            onClick={() => setButton("Update")}
            className={`${
              button == "Update"
                ? "bg-GREENDARK text-white"
                : "text-GREENDARK bg-white"
            } ring-2 ring-GREENDARK rounded-full px-5 py-1 fort-semibold md:text-base text-sm lg:text-lg hover:bg-GREENDARK hover:text-white`}
          >
            Update
          </button>
          <button
            onClick={() => setButton("Donatur")}
            className={`${
              button == "Donatur"
                ? "bg-GREENDARK text-white"
                : "text-GREENDARK bg-white"
            } ring-2 ring-GREENDARK rounded-full px-5 py-1 fort-semibold md:text-base text-sm lg:text-lg hover:bg-GREENDARK hover:text-white`}
          >
            Donatur
          </button>
        </div>
        {/* 3 button */}
        {button == "Detail" && (
          <div className="flex my-5 justify-center">
            <div className="flex flex-col gap-2 lg:gap-5 text-Inter lg:text-lg md:text-base text-xs xl:text-xl text-NEUTRAL04 w-[100%] md:w-4/6 md:rounded-3xl bg-white ring-NEUTRAL04 drop-shadow-lg p-5 sm:px-10 text-justify">
              <p>{detailCampaign.description}</p>
              <p className="font-bold">Dapat disalurkan dengan cara :</p>
              <ul className="font-bold">
                <li>1. {`Klik tombol "Donasi Sekarang"`}</li>
                <li>2. Masukkan nominal donasi</li>
                <li>3. Isi data diri</li>
                <li>4. Pilih metode pembayaran</li>
                <li>
                  5.{" "}
                  {` Klik "Lanjutkan Pembayaran" dan ikuti langkah selanjutnya`}
                </li>
                <li>6. Dapatkan laporan via email</li>
              </ul>
            </div>
          </div>
        )}
        {button == "Update" && (
          <div className="flex justify-center mt-10">
            <img src={pana} className="md:w-auto w-60" alt="" />
          </div>
        )}
        {button == "Donatur" && (
          <div className="mt-10 md:mt-16 mb-5">
            <div className="flex gap-5 items-center justify-center">
              <div className="rounded-lg bg-white drop-shadow-lg flex px-4 py-2 gap-5">
                <div>
                  <img src={user} className="w-12 md:w-14 lg:w-16" alt="" />
                </div>
                <div>
                  <div className="flex text-base md:text-lg xl:text-xl gap-3">
                    <p className="font-bold">Hamba Allah</p>
                    <p>12/09/2024</p>
                    <p>23:24</p>
                  </div>
                  <p className="text-sm md:text-lg xl:text-xl">Rp.100.000</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {/*  */}
      </div>
      <div className="px-5 md:px-10 lg:px-20 bg-white py-2">
        <div className="flex flex-col text-center sm:gap-3">
          <p className=" md:text-3xl xl:text-5xl text-2xl font-Montserrat font-bold text-GREENDARK">
            Bantu Mereka
          </p>
          <div className="md:text-xl xl:text-3xl text-base">
            <p>Mereka butuh uluran tangan kita.</p>
            <p>Sedikit bantuan kita sangat berarti bagi mereka</p>
          </div>
        </div>
        <div className="flex justify-between items-end text-xl font-Inter sm:text-2xl font-bold my-2 sm:my-3">
          Campaign Populer
          <Link
            to={`/detailDonasi/detailCampaign`}
            className="text-xs text-green-500 sm:text-base"
          >
            Lihat semua
          </Link>
        </div>
        {/* card */}
        <div className="sm:hidden md:mx-10 lg:mx-20 flex flex-row justify-between grid md:grid-cols-3 grid-cols-2  md:gap-6 sm:gap-5 gap-3">
          {campaign.slice(0, 6).map((item) => (
            <CardCarousel key={item.id} item={item} />
          ))}
        </div>
        <div className="hidden justify-between sm:grid md:grid-cols-3 grid-cols-2  mb-8 md:gap-6 sm:gap-5 gap-3">
          {campaign.slice(0, 6).map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
        {/* category */}
        <div className="flex flex-col text-xl font-Inter sm:text-2xl font-bold my-2 sm:my-3">
          <p>Category</p>
          <div className="flex flex-wrap gap-x-3 gap-y-3 mt-2">
            {allCategory.map((item) => (
              <Link
                to={`/detailDonasi/${item.categoryName}`}
                key={item.id}
                className="text-xs sm:text-base ring-1 ring-green-500 p-1 rounded-sm active:bg-green-500 active:text-white"
              >
                {item.categoryName}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
