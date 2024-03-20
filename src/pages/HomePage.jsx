import content1 from "../assets/conten1.svg";
import content2 from "../assets/content2.svg";
import image1 from "../assets/image1.svg";
import image2 from "../assets/image2.svg";
import image3 from "../assets/image3.svg";
import image4 from "../assets/image4.svg";
// import Ziswaf from "../components/Ziswaf";
import Card from "../components/Card";
// import data from "../data";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCampaign, getAllCategory } from "../redux/action/campaignAction";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardCarousel from "../components/CardCarousel";

export default function HomePage() {
  const [showCard, setShowCard] = useState(6);
  const dispatch = useDispatch();
  const { campaign } = useSelector((state) => state.campaign);
  const { allCategory } = useSelector((state) => state.campaign);

  const lebihBanyak = () => {
    setShowCard(showCard + 6);
  };

  useEffect(() => {
    dispatch(getAllCampaign());
    dispatch(getAllCategory());
  }, [dispatch]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
  };
  const responsive2 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div>
      {/* header */}
      <div className="lg:px-10 md:px-5 px-2 xl:px-20 py-10 md:mt-10 h-56 sm:h-80 md:h-80 lg:h-96 max-h-96 bg-GREENDARK flex justify-start font-bold text-3xl sm:items-center tems-start">
        <img
          src="https://aladinbank.id/uploads/2022/05/Image-aladin-donasi-dan-zakat.svg"
          alt=""
          className="w-3/6 md:w-[40%]"
        />
        <div className="top-0 left-0 md:mt-10 h-60 sm:h-80 md:h-80 lg:h-96 bg-gradient-to-r from-transparent via-GREENDARK/50 to-GREENDARK w-3/6 md:w-2/6 absolute"></div>
        <p className="sm:text-3xl text-base md:text-4xl w-1/2 text-white/80">
          Donasi Mudah Kini Bisa Lebih Cepat Tanpa Ada Jarak
        </p>
      </div>
      <div className="flex justify-center">
        <div className="absolute top-[24vh] sm:top-[50vh] md:top-[50vh] lg:top-[60vh] flex sm:w-5/6 w-[90%] xl:w-4/6 bg-white drop-shadow-3xl rounded-3xl px-1 sm:px-5 md:px-10 lg:px-20 sm:py-5 py-2 hover:scale-105 transition delay-150 duration-300 ease-in-out">
          <div className="flex w-full justify-around md:justify-between p-2 items-start">
            <div className="flex flex-col items-center">
              <img
                src={image1}
                className="w-16 sm:w-20 md:w-24 lg:w-28"
                alt=""
              />
              <p className="text-GREENDARK md:text-lg text-[10px] ms:text-sm lg:text-xl">
                0
              </p>
              <p className="font-bold md:text-lg sm:text-sm text-[8px] text-center lg:text-xl text-black font-Inter">
                Penerima Manfaat
              </p>
            </div>
            <div className="flex flex-col items-center ">
              <img
                src={image2}
                className="w-16 sm:w-20 md:w-24 lg:w-28"
                alt=""
              />
              <p className="text-GREENDARK md:text-lg text-[10px] ms:text-sm lg:text-xl">
                0
              </p>
              <p className="font-bold md:text-lg sm:text-sm text-[8px] text-center lg:text-xl text-black font-Inter">
                Penghimpunan
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={image3}
                className="w-16 sm:w-20 md:w-24 lg:w-28"
                alt=""
              />
              <p className="text-GREENDARK md:text-lg text-[10px] ms:text-sm lg:text-xl">
                0
              </p>
              <p className="font-bold md:text-lg sm:text-sm text-[8px] text-center lg:text-xl text-black font-Inter">
                Penyaluran
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={image4}
                className="w-16 sm:w-20 md:w-24 lg:w-28"
                alt=""
              />
              <p className="text-GREENDARK md:text-lg text-[10px] ms:text-sm lg:text-xl">
                0
              </p>
              <p className="font-bold md:text-lg sm:text-sm text-[8px] text-center lg:text-xl text-black font-Inter">
                Donatur
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* content1 */}
      <div className="flex mt-[10vh] sm:mt-[30vh] justify-between mx-4 md:mx-10 lg:mx-20 items-start gap-5">
        <div className="font-Inter text-NEUTRAL04 sm:w-[80%] w-[60%]">
          <h1 className="sm:my-3 my- xl:my-5 sm:text-3xl text-lg md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            Salurkan donasi kamu dengan mudah
          </h1>
          <p className="md:text-base lg:text-lg sm:text-sm text-xs xl:text-xl xl:w-2/4 my-1 sm:my-3 lg:my-5 ">
            Jadikan program dan design kamu lebih menarik dan tertata rapi
            dengan menggunakan jasa dari Coristict.Studio
          </p>
          <button className="my-1 lg:my-3 bg-GREENDARK rounded-sm px-4 py-1 lg:py-2 md:text-lg text-xs sm:text-base lg:text-lg xl:text-xl text-white font-bold hover:scale-105">
            <Link to={"/detailDonasi/detailDonasi"}>Donasi Sekarang</Link>
          </button>
        </div>
        <div className="w-3/6 lg:w-2/6">
          <img src={content1} alt="" />
        </div>
      </div>
      {/* button */}
      <div className="flex ustify-between md:mt-10 mt-5 mx-4 md:mx-10 lg:mx-20 lg:text-3xl font-Inter font-bold">
        Rekomendasi Kegiatan
      </div>
      <Carousel
        className="drop-shadow-lg md:mx-10 lg:mx-20"
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive2}
        // ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        initialSlide={1} // Mengatur slide awal ke index kedua (indeks dimulai dari 0)
      >
        {campaign.slice(0, 3).map((item) => (
          <Link
            key={item.campaignId}
            to={`/detailCampaign/${item.campaignCode}`}
          >
            <div>
              <img
                className="md:mb-10 mb-10 my-2 h-44 sm:h-72 md:h-96 w-full object-cover"
                src={item.campaignImage}
                alt=""
              />
            </div>
          </Link>
        ))}
      </Carousel>

      {/* card */}
      <div>
        <div className="flex justify-between items-end text-xl font-Inter sm:text-2xl font-bold my-2 sm:my-3 md:mx-10 lg:mx-20 mx-4">
          Program Aktif
          <Link
            to={`/detailDonasi/detailCampaign`}
            className="text-xs text-green-500 sm:text-base"
          >
            Lihat semua
          </Link>
        </div>
        <div className="hidden md:mx-10 lg:mx-20 justify-between sm:grid md:grid-cols-3 grid-cols-2 mb-12 md:gap-6 sm:gap-5 gap-3">
          {campaign.slice(0, showCard).map((item) => (
            <Card key={item.campaignId} item={item} />
          ))}
        </div>
        <Carousel
          className="sm:hidden drop-shadow-lg mx-2"
          swipeable={true}
          draggable={true}
          // showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={false} // Mengatur autoplay menjadi false untuk menghentikan geser otomatis
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          initialSlide={1}
        >
          {campaign.slice(0, showCard).map((item) => (
            <div key={item.campaignId}>
              <CardCarousel
                key={item.campaignId}
                item={item}
                height={"h-60"}
                margin={"m-1"}
              />
            </div>
          ))}
        </Carousel>
      </div>
      {/* button2 */}
      <div className="hidden md:flex justify-center my-10">
        {showCard <= 12 && (
          <button
            onClick={lebihBanyak}
            className="xl-text-xl lg:text-lg text-sm bg-GREENDARK font-bold text-white rounded-full px-6 py-2 text-lg text-Inter hover:scale-105"
          >
            Program Lainnya
          </button>
        )}
      </div>
      {/* category */}
      <div className="flex flex-col text-xl font-Inter sm:text-2xl font-bold my-2 sm:my-3 mx-4 md:mx-10 lg:mx-20">
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
      {/* content2 */}
      <div className="flex gap-2 justify-between lg:mx-10 mx-4 xl:mx-20 lg:items-center items-start font-Inter my-10">
        <div className="w-1/2">
          <img src={content2} alt="" />
        </div>
        <div className="w-3/6 flex flex-col lg:gap-8 md:gap-5 gap-1 xl:gap-10 align-end">
          <h1 className="font-bold lg:text-5xl md:text-3xl text-base xl:text-6xl flex text-right">
            5 PILAR PROGRAM NU CARE-LAZISNU
          </h1>
          <p className="lg:text-lg md:text-base sm:text-sm text-[8px] xl:text-xl flex text-justify line-clamp-2">
            Saat ini, program kerja NU Care-LAZISNU mengacu pada 5 (lima) Pilar
            yaitu, (1) NU Care Cerdas di bidang Pendidikan; (2) NU Care Berdaya
            di bidang Ekonomi; (3) NU Care Sehat bidang Kesehatan; (4) NU Care
            Damai terkait bidang Dakwah dan Kemanusiaan, serta; (5) NU Care
            Hijau di bidang Lingkungan Hidup dan Energi. #SahabatPeduli dapat
            turut serta berkontribusi untuk program NU Care-LAZISNU, melalui
            laman:nucare.id/program
          </p>
        </div>
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
