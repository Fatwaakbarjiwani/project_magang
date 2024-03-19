import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getDetailCampaign } from "../redux/action/campaignAction";
import { useDispatch, useSelector } from "react-redux";

export default function PembayaranDonasi() {
  const dispatch = useDispatch();
  const { detailCampaign } = useSelector((state) => state.campaign);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(getDetailCampaign(id));
    }
  }, [id, dispatch]);
  return (
    <div>
      {/* content */}
      <div className="font-Inter text-gray-600" key={detailCampaign.id}>
        {/* content 1 */}
        <div className="sm:mt-16 mt-8 xl:mt-36 flex flex-col items-center">
          <div className="md:p-5 lg:p-5 w-5/6 rounded-3xl lg:rounded-2xl xl:rounded-3xl gap-4 lg:gap-8 ring-black bg-white drop-shadow-lg md:flex justify-between">
            <div className="md:w-1/2">
              <img
                src={detailCampaign.campaignImage}
                className="md:rounded-2xl rounded-t-3xl xl:rounded-3xl w-full"
                alt=""
              />
            </div>
            <div className="md:w-1/2 p-5 md:p-0">
              <p className="font-bold lg:text-3xl md:text-2xl text-2xl">
                Anda akan berdonasi untuk campaign{" "}
              </p>
              <p className="xl:text-2xl lg:text-xl md:text-lg text-base mt-3 lg:mt-5">
                {detailCampaign.campaignName}
              </p>
            </div>
          </div>
          {/* colom */}
          <div className="w-5/6 mt-5">
            <p className="font-bold text-xl">
              Nominal Zakat, Infak, Atau Wakaf
            </p>
            <p>Nominal Zakat, Infak, Atau Wakaf Anda Sebesar Rp </p>
          </div>
          {/* harga */}
          <div className="w-5/6 flex justify-between gap-3 md:gap-16 my-3">
            <button className="bg-white ring-2 ring-gray-600 drop-shadow-lg w-full p-2 rounded-2xl hover:translate-y-[-5px] duration-300">
              Rp 100.000
            </button>
            <button className="bg-white ring-2 ring-gray-600 drop-shadow-lg w-full p-2 rounded-2xl hover:translate-y-[-5px] duration-300">
              Rp 100.000
            </button>
          </div>
          <div className="w-5/6 flex justify-between gap-3 md:gap-16 my-3">
            <button className="bg-white ring-2 ring-gray-600 drop-shadow-lg w-full p-2 rounded-2xl hover:translate-y-[-5px] duration-300">
              Rp 100.000
            </button>
            <button className="bg-white ring-2 ring-gray-600 drop-shadow-lg w-full p-2 rounded-2xl hover:translate-y-[-5px] duration-300">
              Rp 100.000
            </button>
          </div>
          <div className="w-5/6 flex justify-between gap-3 md:gap-16 mt-3">
            <button className="bg-white ring-2 ring-gray-600 drop-shadow-lg w-full p-2 rounded-2xl hover:translate-y-[-5px] duration-300">
              Rp 100.000
            </button>
            <button className="bg-white ring-2 ring-gray-600 drop-shadow-lg w-full p-2 rounded-2xl hover:translate-y-[-5px] duration-300">
              Rp 100.000
            </button>
          </div>
          {/*  */}
          <div className="w-5/6">
            <p className="text-xl lg:text-2xl mt-5 font-bold">Jumlah</p>
          </div>
          {/*  */}
          <div className="w-5/6">
            <div className="w-full ring-black ring-2 mt-3 rounded-xl flex items-center">
              <p className="text-xl rounded-l-xl p-2 ring-black ring-2">Rp.</p>
              <input
                type="text"
                className="w-full focus:outline-none text-xl m-2 "
              />
            </div>
          </div>
          {/*  */}
          <div className="w-5/6 mt-2">
            <p>Jumlah harus lebih besar dari Rp.10.000,-</p>
          </div>
          {/*  */}
          <div className="w-5/6 mt-5 mb-20">
            <Link to={`/metodePembayaran/${id}`}>
              <button className="w-full bg-GREENDARK font-bold text-lg rounded-full text-white p-2 hover:translate-y-[-5px] duration-300">
                Lanjut Pembayaran
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
