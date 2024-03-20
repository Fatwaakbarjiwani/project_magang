// import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Card from "../components/Card";
import CardCarousel from "../components/CardCarousel";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCampaign,
  searchCampaignName,
} from "../redux/action/campaignAction";
import { useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Pencarian() {
  const { getCampaignSearch } = useSelector((state) => state.campaign);
  const { campaign } = useSelector((state) => state.campaign);
  const dispatch = useDispatch();
  const { pencarian } = useParams();
  useEffect(() => {
    if (pencarian) {
      dispatch(searchCampaignName(pencarian)); // Memanggil fungsi searchCampaignName dengan parameter pencarian
      dispatch(getAllCampaign());
    }
  }, [pencarian, dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <div>
      <div className="mx-4 md:mx-10 lg:mx-20">
        <div className="lg:mt-20 sm:mt-10 mt-14 text-NEUTRAL05 font-Inter flex flex-wrap">
          <p className="font-black md:text-2xl lg:text-3xl">{`Hasil Pencarian "${pencarian}"`}</p>
        </div>
        <div>
          <div className="hidden justify-between sm:grid md:grid-cols-3 grid-cols-2 md:gap-6 mt-4 sm:gap-5 gap-4">
            {getCampaignSearch.slice(0, 12).map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
          <div className="sm:hidden flex flex-row justify-between grid md:grid-cols-3 grid-cols-2 mt-1 gap-4">
            {getCampaignSearch.slice(0, 12).map((item) => (
              <CardCarousel key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="lg:mt-20 sm:mt-10 mt-5 text-NEUTRAL05 font-Inter flex flex-wrap">
          <p className="font-black md:text-2xl lg:text-3xl">
            Rekomendasi untuk anda
          </p>
        </div>
        <div className="hidden mt-5 justify-between sm:grid md:grid-cols-3 grid-cols-2 mb-12 md:gap-6 sm:gap-5 gap-3">
          {campaign.slice(0, 6).map((item) => (
            <Card key={item.campaignId} item={item} />
          ))}
        </div>
      </div>
        <Slider {...settings} className="sm:hidden drop-shadow-lg mx-2">
          {campaign.slice(0, 6).map((item) => (
            <div key={item.campaignId}>
              <CardCarousel
                key={item.campaignId}
                item={item}
                height={"h-60"}
                margin={"m-1"}
              />
            </div>
          ))}
        </Slider>
      <div>
        <Footer />
      </div>
    </div>
  );
}
