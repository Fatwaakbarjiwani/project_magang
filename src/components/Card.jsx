import location from "../assets/location.svg";
import time from "../assets/time.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Target from "./Target";
import { useEffect, useState } from "react";
export default function Card({ item }) {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const cardCategory = () => {
      setCategory(item.category);
    };
    cardCategory();
  }, [item]);

  return (
    <div>
      <div
        className={`card-wrapper justify-between h-full drop-shadow-lg bg-NEUTRAL06 rounded-xl md:rounded-xl xl:rounded-3xl md:p-2 p-2 lg:p-4 xl:p-5 flex flex-col gap-1 sm:gap-2 lg:gap-2 font-NEUTRAL04 font-Inter cursor-pointer md:hover:scale-105 transition delay-150 duration-300 ease-in-out`}
      >
        <div>
          <img
            src={item.campaignImage}
            className="object-cover h-24 sm:h-36 md:h-40 lg:h-52 rounded-xl md:rounded-xl xl:rounded-3xl w-full"
            alt=""
            // style={{ aspectRatio: "3/2" }}
          />
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <div>
            <p className="font-Inter font-bold md:text-base text-xs lg:text-lg line-clamp-2">
              {item.campaignName}
            </p>
          </div>
          {/* category */}
          <div className="flex flex-col justify-between gap-1">
            <div className="md:text-sm text-[6px] flex gap-1 items-center">
              <p>Kategori</p>
              <p className="bg-GREENDARK text-white px-1 sm:px-2 rounded-3xl  font-semibold">
                {category.categoryName}
              </p>
            </div>
            {/* location */}
            <div className="flex gap-1 lg:gap-1 items-center">
              <img src={location} className="lg:w-5 md:w-5 w-3" alt="" />
              <p className="md:text-sm xl:text-base sm:text-xs text-[8px]">
                {item.location}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1 justify-between sm:hidden">
            <p className="xl:text-base md:text-sm sm:text-xs text-[8px]">
              Terkumpul
            </p>
            <div className="w-full rounded-full bg-NEUTRAL04">
              <Target
                targetAmount={item.targetAmount}
                amountCampaign={item.currentAmount}
              />
            </div>
          </div>
          <div className="w-full rounded-full bg-NEUTRAL04 hidden sm:block">
            <Target
              targetAmount={item.targetAmount}
              amountCampaign={item.currentAmount}
            />
          </div>
          <div className="hidden sm:flex justify-between ">
            <p className="xl:text-base md:text-sm sm:text-xs ">Terkumpul</p>
            <p className="xl:text-base md:text-sm sm:text-xs ">
              Rp.{item.currentAmount}
            </p>
          </div>
          {/* button */}
          <div className="block sm:hidden justify-between">
            <div className="flex gap-1 items-center">
              <img className="lg:w-7 md:w-5 w-3" src={time} alt="" />
              <p className="lg:text-base md:text-sm sm:text-xs text-[8px]">
                {item.endDate}
              </p>
            </div>
            <Link to={`/detailCampaign/${item.campaignCode}`}>
              <button className="mt-1 w-full rounded-lg lg:px-5 md:px-4 sm:px-3 px-2 xl:px-6 py-1 lg:py-2 bg-GREENDARK lg:text-base md:text-sm sm:text-xs text-[10px] text-white font-bold md:hover:scale-105 md:hover:bg-green-600">
                Ikut Donasi
              </button>
            </Link>
          </div>
          <div className="sm:flex hidden justify-between">
            <Link to={`/detailCampaign/${item.campaignCode}`}>
              <button className="rounded-full lg:px-5 md:px-4 sm:px-3 px-2 xl:px-6 py-1 lg:py-2 bg-GREENDARK xl:text-base lg:text-sm sm:text-xs text-[10px] text-white font-bold hover:scale-105 hover:bg-green-600">
                Ikut Donasi
              </button>
            </Link>
            <div className="flex gap-1 items-center">
              <img className="lg:w-5 md:w-5 w-3" src={time} alt="" />
              <p className="xl:text-base lg:text-sm sm:text-xs text-[8px]">
                {item.endDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
  item: PropTypes.object.isRequired,
};
