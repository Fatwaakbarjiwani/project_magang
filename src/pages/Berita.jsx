import BeritaImage from "../assets/berita.svg";
import search from "../assets/search.svg";
import down from "../assets/down2.svg";
import Footer from "../components/Footer";
import CardBerita from "../components/CardBerita";
import data from "../berita";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Berita() {
  const { berita } = useParams();
  return (
    <div>
      <div>
        <Navbar url={berita} />
      </div>
      {/* content 1 */}
      <div
        style={{
          backgroundImage: `url(${BeritaImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-full lg:h-[70vh] md:h-[65vh] sm:h-[40vh] h-[30vh] md:mt-10 lg:mt-14 flex flex-col justify-end md:p-10 p-5 xl:p-20"
      >
        <div className="font-Inter text-white xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:w-[80%] font-semibold">
          <div className="z-10 absolute w-[20%] h-7 sm:h-8 md:h-9 lg:h-10 xl:h-12 bg-gradient-to-r from-yellow-600 to-transparant"></div>
          <div className="z-20 flex flex-wrap relative">
            <p className="relative z-20">
              Ratusan Juta Rupiah Disalurkan NU Peduli pada Tahap Kedua Bantuan
              ke Daerah Terdampak Banjir Demak
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[70vh] sm:bottom-[60vh] md:bottom-[26vh] lg:bottom-32 w-full bg-gradient-to-t from-black to-transparant h-96"></div>
      {/* search */}
      <div className="md:mx-10 mx-5 xl:mx-20 mt-5 md:mt-10 flex md:flex-none justify-between">
        <div className="flex w-4/6 lg:w-full ring-2 ring-gray-600 rounded-full items-center">
          <img src={search} alt="" className="mx-5 md:my-2" />
          <input
            type="text"
            className="w-[80%] md:w-full focus:outline-none mr-2 text-lg"
          />
        </div>
        <button className="flex lg:hidden items-center gap-2 bg-GREENDARK text-white py-2 px-4 md:p-3 rounded-lg hover:scale-105">
          Kategory <img src={down} alt="" />
        </button>
      </div>
      {/* button */}
      <div className="xl:px-20 md:px-10 px-5 py-5 md:py-10 xl:py-10">
        <div className="flex justify-between items-center font-Inter font-semibold md:text-xl sm:text-lg text-sm xl:text-2xl">
          <div className="flex justify-between lg:w-4/6 w-full">
            <button className="hover:text-green-600 hover:underline hover:underline-offset-[2vh]">
              Semua
            </button>
            <button className="hover:text-green-600 hover:underline hover:underline-offset-[2vh]">
              Opini
            </button>
            <button className="hover:text-green-600 hover:underline hover:underline-offset-[2vh]">
              Daerah
            </button>
            <button className="hover:text-green-600 hover:underline hover:underline-offset-[2vh]">
              Nasional
            </button>
            <button className="hover:text-green-600 hover:underline hover:underline-offset-[2vh]">
              Internasional
            </button>
            <button className="hover:text-green-600 hover:underline hover:underline-offset-[2vh]">
              Ziswaf
            </button>
            <button className="hover:text-green-600 hover:underline hover:underline-offset-[2vh]">
              Hikmah&Doa
            </button>
          </div>
          <button className="hidden lg:flex items-center gap-2 bg-GREENDARK text-white p-2 md:p-3 rounded-lg hover:scale-105">
            Pilih Kategory <img src={down} alt="" />
          </button>
        </div>
      </div>
      {/* cardBerita */}
      <div className="mx-5 md:mx-10 lg:mx-20 flex flex-row justify-between grid md:grid-cols-3 grid-cols-2 mt-4 mb-12 md:gap-6 sm:gap-5 gap-4 lg:gap-6">
        {data.map((item) => (
          <CardBerita key={item.id} item={item} />
        ))}
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
