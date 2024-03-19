import content2 from "../assets/content2.svg";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

export default function DetailDonasi() {
  const { id } = useParams();
  const { campaign } = useSelector((state) => state.campaign);
  return (
    <div>
      <div>
        <Navbar url={id} />
      </div>
      {/* content 1 */}
      <div className="flex mt-10 gap-10 lg:mx-10 mx-5 xl:mx-20 lg:items-center items-start font-Inter">
        <div className="w-3/6">
          <img src={content2} className="lg:h-[80vh] object-cover" alt="" />
        </div>
        <div className="w-4/6 flex flex-col lg:gap-8 md:gap-5 gap-1 xl:gap-6 align-end">
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
      {/* card */}
      <div className="mx-5 md:mx-10 lg:mx-20 flex flex-row justify-between grid md:grid-cols-3 grid-cols-2 mt-8 lg:mt-12 mb-12 md:gap-6 sm:gap-5 gap-4">
        {campaign.slice(0, 12).map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
