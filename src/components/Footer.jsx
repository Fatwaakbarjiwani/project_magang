import fb from "../assets/facebook.svg";
import twit from "../assets/twitter.svg";
import ig from "../assets/instagram.svg";
import li from "../assets/linkedin.svg";
import pesan from "../assets/pesan.svg";
import browser from "../assets/browser.svg";
import footer from "../assets/footer.svg";

export default function Footer() {
  return (
    <div
      style={{ backgroundImage: `url(${footer})` }}
      className="flex justify-around md:justify-between lg:p-10 p-5 xl:p-20 bg-GREENDARK text-white font-Inter mt-10 mb-14 md:mb-0"
    >
      <div className="w-1/6 flex flex-col gap-1 sm:gap-2 xl:gap-5">
        <h1 className="font-bold sm:text-2xl  text-[10px] xl:text-3xl text-green-500">
          CARE <span className="text-GREENDARK2">US</span>
        </h1>
        <p className="flex text-left xl:text-base md:text-sm sm:text-xs text-[7px]">
          Gedung PBNU, Lt. 2 Jl. Kramat Raya, No. 164, Jakarta Pusat (10430)
          Telp: (021) 3102913 Hp/WA: 0813 9800 9800
        </p>
        <div className="flex sm:gap-3 gap-1 md:gap-5">
          <button className="bg-GREENDARK2 rounded-full w-6 md:w-8 xl:w-10 xl:h-10 flex justify-center items-center hover:scale-110">
            <img src={fb} alt="" />
          </button>
          <button className="bg-GREENDARK2 rounded-full w-6 md:w-8 xl:w-10 xl:h-10 flex justify-center items-center hover:scale-110">
            <img src={twit} alt="" />
          </button>
          <button className="bg-GREENDARK2 rounded-full w-6 md:w-8 xl:w-10 xl:h-10 flex justify-center items-center hover:scale-110">
            <img src={ig} alt="" />
          </button>
          <button className="bg-GREENDARK2 rounded-full w-6 md:w-8 xl:w-10 xl:h-10 flex justify-center items-center hover:scale-110">
            <img src={li} alt="" />
          </button>
        </div>
      </div>
      <div className="w-1/6 flex flex-col md:gap-5 gap-2">
        <p className="font-bold sm:text-base  text-[10px] lg:text-lg">
          Program
        </p>
        <div className="sm:text-text-sm text-[7px] lg:text-base">
          <div className="flex justify-between xl:gap-5 gap-2">
            <p>Zakat</p>
            <p>Campaign</p>
          </div>
          <div className="flex justify-between xl:gap-5 gap-2">
            <p>Ziswaf</p>
            <p>Berita</p>
          </div>
          <div className="flex justify-between xl:gap-5 gap-2">
            <p>Donasi</p>
            <p>Infak</p>
          </div>
        </div>
      </div>
      <div className="w-1/6 flex flex-col gap-2 md:gap-5 z-10">
        <p className="font-bold sm:text-base text-xs lg:text-lg">Lainnya</p>
        <div className="flex flex-col xl:gap-5 gap-1 sm:text-text-sm text-[7px] lg:text-base">
          <p>Zakat</p>
          <p>Apa itu Ziswaf?</p>
          <p>Privacy Policy</p>
          <p>Syarat dan Ketentuan </p>
          <p>Refund Policy</p>
        </div>
      </div>
      <div className="w-1/6 flex flex-col gap-2 md:gap-5 z-10">
        <p className="font-bold sm:text-base text-[10px] lg:text-lg">
          Tentang Kami
        </p>
        <div className="flex flex-col  lg:gap-5 gap-2">
          <div className="flex gap-1 items-center lg:gap-3 sm:text-text-sm text-[7px] lg:text-base">
            <img src={browser} className="w-3 sm:w-6" alt="" />
            <p>https://nucare.id/</p>
          </div>
          <div className="flex gap-3 sm:text-text-sm text-[7px] lg:text-base">
            <img src={pesan} className="w-3 sm:w-6" alt="" />
            <p>@nucare.id</p>
          </div>
        </div>
      </div>
      {/* <div className="absolute w-[52%] right-20 top-[768vh]">
        <img src={element} alt="" />
      </div> */}
    </div>
  );
}
