import flower from "../assets/Zakat.png";
import Ziswaf from "../components/Ziswaf";
import content1 from "../assets/conten1.svg";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function DetailZISWAF() {
  const { detailZISWAF } = useParams();
  return (
    <div>
      <div>
        <Navbar url={detailZISWAF} />
      </div>
      {/* content */}
      <div className="mt-20">
        <div className=" max-h-96 gap-3 px-20 bg-GREENDARK flex flex-row justify-between items-center">
          <div className="flex justify-between w-4/6">
            <p className="font-Madimi text-5xl text-white">
              {
                "Zakat adalah pelajaran tentang kepedulian dan keikhlasan,mengalirkan kasih sayang kepada sesama"
              }
            </p>
          </div>
          <img src={flower} className=" h-[60vh]" alt="" />
        </div>
      </div>
      {/*Ziswaf*/}
      <div className="relative">
        <div className="flex justify-center mt-[10vh]">
          <Ziswaf />
        </div>
      </div>
      {/* content1 */}
      <div className="flex mt-20 justify-between mx-20 items-center">
        <div className="font-Inter text-NEUTRAL04">
          <h1 className="my-5 text-6xl w-4/6 font-bold">
            Salurkan donasi kamu dengan mudah
          </h1>
          <p className="text-xl w-2/4 my-5 ">
            Jadikan program dan design kamu lebih menarik dan tertata rapi
            dengan menggunakan jasa dari Coristict.Studio
          </p>
          <button className="my-8 bg-GREENDARK rounded-full px-4 py-2 text-xl text-white font-bold hover:scale-105">
            Donasi Sekarang
          </button>
        </div>
        <div>
          <img src={content1} alt="" />
        </div>
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
