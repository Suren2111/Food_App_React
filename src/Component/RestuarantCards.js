import { Link } from "react-router-dom";
import * as obj_harcoded from "../utils/constants";

const RestuarantCards=(props)=>{
    const {rescard}=props;
    const{name, costForTwo,cuisines,cloudinaryImageId, avgRating,id}= rescard?.info
    return(
            <div className="restaurant-card p-4 w-80 bg-white shadow-lg rounded-lg hover:scale-105 hover:shadow-xl transition-transform duration-300  dark:bg-gray-800 text-black dark:text-white">
              <Link to={"/restuarantcards/"+id}><img  className="w-full h-48 object-cover rounded-lg" src={obj_harcoded.CDN_URL+cloudinaryImageId} alt="Restuarant Image" /></Link>
              <h2 className="text-xl font-semibold mt-4">{name}</h2>
              <h3 className="text-lg text-gray-600 mt-2">{costForTwo}</h3>
              <h4 className="text-sm text-gray-500 mt-1">{cuisines.join(",")}</h4>
              <h3 className="text-lg font-bold text-yellow-500 mt-2">{avgRating}</h3>
            </div>         
    )
}

export const withPromotedLabel=(RestuarantCards)=>{
  return (props)=>{
    const {rescard}=props;
    return(
      <div>
          <label className="absolute bg-black text-white p-2 m-2 rounded-md font-light">Promoted</label>
          <RestuarantCards rescard={rescard}/>
      </div>
      

    )
  }
}

export default RestuarantCards;