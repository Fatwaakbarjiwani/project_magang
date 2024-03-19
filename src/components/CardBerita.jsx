import PropTypes from "prop-types";
import calendar from "../assets/calendar.svg";
export default function CardBerita({ item }) {
  return (
    <div>
      <div className="card-wrapper h-full bg-NEUTRAL06 lg:rounded-2xl md:rounded-xl rounded-lg xl:rounded-2xl md:p-4 flex flex-col md:gap-3 gap-1 sm:gap-3 lg:gap-5 font-NEUTRAL04 font-Inter cursor-pointer hover:scale-105 transition delay-150 duration-300 ease-in-out">
        <div className="">
          <img
            src={item.Image}
            className="object-cover h-28 sm:h-32 md:h-32 w-full lg:rounded-2xl md:rounded-t-xl rounded-t-lg xl:rounded-2xl w-full h-full "
            alt=""
            // style={{ aspectRatio: "3/2" }}
          />
        </div>
        <div className="p-2 md:p-0">
          <p className="font-Inter font-bold md:text-base text-sm lg:text-lg line-clamp-3 sm:line-clamp-3">
            {item.name}
          </p>
        </div>
        <div className="lg:flex md:text-sm text-xs justify-between py-1 px-2 md:p-0">
          <div className="flex gap-2 md:gap-3 items-center">
            <img src={calendar} className="w-4 md:w-6" alt="" />
            <p>{item.date}</p>
          </div>
          <p className="mt-1 md:mt-0">{item.kategory}</p>
        </div>
      </div>
    </div>
  );
}
CardBerita.propTypes = {
  item: PropTypes.array.isRequired,
};
