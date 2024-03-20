import content2 from "../assets/content2.svg";
import Card from "../components/Card";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import CardCarousel from "../components/CardCarousel";
import { useEffect } from "react";
import {
  getAllCampaign,
  getAllCategory,
  getCampaignCategory,
} from "../redux/action/campaignAction";

export default function DetailDonasi() {
  const { id } = useParams();
  const { campaign } = useSelector((state) => state.campaign);
  const dispatch = useDispatch();
  const { allCategory } = useSelector((state) => state.campaign);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (id == "detailDonasi") {
      dispatch(getAllCampaign());
    } else {
      dispatch(getCampaignCategory(id));
    }
    dispatch(getAllCategory());
  }, [dispatch, id]);
  const handleCategoryChange = (selectedCategory) => {
    // setCategory(selectedCategory);
    navigate(`/detailDonasi/${selectedCategory}`);
  };

  return (
    <div>
      <div>
        <Navbar url={id} />
      </div>
      {/* content 1 */}
      <div className="hidden sm:flex mt-10 gap-10 lg:mx-10 mx-5 xl:mx-20 lg:items-center items-start font-Inter">
        <div className="w-3/6">
          <img src={content2} className="lg:h-[80vh] object-cover" alt="" />
        </div>
        <div className=" w-4/6 flex flex-col lg:gap-8 md:gap-5 gap-1 xl:gap-6 align-end">
          <h1 className="font-bold lg:text-5xl md:text-3xl text-base xl:text-6xl flex text-right">
            5 PILAR PROGRAM NU CARE-LAZISNU
          </h1>
          <div className="lg:text-lg md:text-base sm:text-sm text-[8px] xl:text-xl text-justify line-clamp-">
            <p>
              Saat ini, program kerja NU Care-LAZISNU mengacu pada 5 (lima)
              Pilar yaitu :(1) NU Care Cerdas di bidang Pendidikan. (2) NU Care
              Berdaya di bidang Ekonomi (3) NU Care Sehat bidang Kesehatan. (4)
              NU Care Damai terkait bidang Dakwah dan Kemanusiaan. (5) NU Care
              Hijau di bidang Lingkungan Hidup dan Energi. #SahabatPeduli dapat
              turut serta berkontribusi untuk program NU Care-LAZISNU, melalui
              laman:nucare.id/program
            </p>
          </div>
        </div>
      </div>
      {/* search */}
      <div className="text-NEUTRAL05 font-Inter flex flex-wrap items-center justify-between mt-16 sm:mt-5 md:mt-10 mx-4 md:mx-10 lg:mx-20">
        <p className="font-black md:text-2xl lg:text-3xl">
          DAFTAR<span className="text-GREENDARK"> CAMPAIGN</span>
        </p>
        <div className="flex flex-col items-end w-full sm:w-auto">
          <select
            className="p-2 w-full sm:w-full sm:p-3 text-sm sm:text-lg bg-white rounded-md ring-1 outline-none ring-green-500 drop-shadow-lg"
            defaultValue={id}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option className="text-[10px] sm:text-base" value="detailDonasi">
              All CATEGORY
            </option>
            {allCategory.map((item) => (
              <option
                key={item.id}
                className="text-[10px] sm:text-base"
                value={item.categoryName}
              >
                {item.categoryName}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* card */}
      <div className="mx-5 md:mx-10 lg:mx-20 mb-[20vh]">
        <div className="hidden justify-between sm:grid md:grid-cols-3 grid-cols-2 mt-8 lg:mt-12 md:gap-6 sm:gap-5 gap-4">
          {campaign.slice(0, 12).map((item) => (
            <Card key={item.campaignId} item={item} />
          ))}
        </div>
        <div className="sm:hidden flex flex-row justify-between grid md:grid-cols-3 grid-cols-2 mt-4 gap-4">
          {campaign.slice(0, 12).map((item) => (
            <CardCarousel
              key={item.campaignId}
              item={item}
              margin=""
              height=""
            />
          ))}
        </div>
      </div>
      {/* footer */}
    </div>
  );
}
