import { Link } from "react-router-dom";
import * as obj_harcoded from "../utils/constants";

const RestuarantCards = (props) => {
  const { rescard } = props;
  const {
    name,
    costForTwo,
    cuisines,
    cloudinaryImageId,
    avgRating,
    id,
    areaName,
    sla,
    aggregatedDiscountInfoV3,
  } = rescard?.info;
  return (
    <Link to={"/restuarantcards/"+id}>
    <div className="hover:scale-95 duration-300 ease-in-out my-3">
      <div className="relative w-full md:h-[210px] min-h-[160px] sm:h-[180px]">
        <img
          src={obj_harcoded.CDN_URL + cloudinaryImageId}
          alt="Example"
          className="w-full h-full rounded-2xl object-cover"
        />
        {
          (aggregatedDiscountInfoV3?.header || aggregatedDiscountInfoV3?.subHeader) &&

          <div className="absolute inset-0 flex items-end justify-end sm:p-2 p-1">
          <h4 className="text-white text-[11px] sm:text-xs sm:text-[13px] font-semibold sm:font-bold bg-[#256FEF] rounded-md py-[3px] px-[2px] sm:px-[5px]">
          {aggregatedDiscountInfoV3?.header}{" "}
          {aggregatedDiscountInfoV3?.subHeader}
          
        </h4>
         </div>

        }
      </div>
      <div className="pl-2 py-3">
        <div className="flex justify-between text-center">
          <h4 className="font-bold text-sm sm:text-[16px] lg:text-[18px] text-start">
            {name}
          </h4>
          <h4 className="font-semibold text-sm sm:text-[16px] lg:text-[18px]">
            {avgRating}
            <i className="ri-star-fill text-[#14883f] text-sm sm:text-[15px] lg:text-[18px] pl-2 align-top"></i>
          </h4>
        </div>
        <div className="sm:flex justify-between">
          <p className="text-[12px] lg:text-[14px] text-[#02060c] opacity-[60%] ">
            {cuisines[0]}
          </p>
          <p className="text-[12px] lg:text-[14px] text-[#02060c] opacity-[60%]">
            {costForTwo}
          </p>
        </div>

        <p className="text-[12px] lg:text-[14px] text-[#02060c] opacity-[60%] py-[4px] lg:py-[6px]">
          {areaName}
        </p>

        <div className="flex justify-between">
          <h4 className="text-[12px] lg:text-[14px]">{sla.slaString}</h4>
          <h4 className="text-[12px] lg:text-[14px]">{sla.lastMileTravelString}</h4>
        </div>
      </div>
    </div>
    </Link>
  );
};

export const withPromotedLabel = (RestuarantCards) => {
  return (props) => {
    const { rescard } = props;
    return (
      <div>
        {/* <label className="absolute bg-black text-white p-2 m-2 rounded-md font-light">
          Promoted
        </label> */}
        <RestuarantCards rescard={rescard} />
      </div>
    );
  };
};

export default RestuarantCards;
