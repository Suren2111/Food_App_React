
import restuarantMenu from "../utils/useRestuarantMenu";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { ShimmerContentBlock } from "react-shimmer-effects";


const RestuarantMenu=()=>{
    const resid=useParams();
    const resDetails=restuarantMenu(resid);
    


if(resDetails===null){

    return(
        <ShimmerContentBlock
        title
        text
        cta
        thumbnailWidth={370}
        thumbnailHeight={370}
      />
    )
    
}
const{name,cloudinaryImageId,cuisines,locality}=resDetails.data?.cards[2]?.card?.card.info
const{itemCards}=resDetails?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
 return(
        <div className="restuarant-menu">
            <h1>{name}</h1>
            <img className="card-logo" src={CDN_URL+cloudinaryImageId}></img>
            <h2>{cuisines}</h2>
            <h3>{locality}</h3>
            <h3>Menu</h3>
            <ul>
            {
                itemCards.map((items)=> 
                {
                    return <li>{items?.card?.info.name}</li>
                }
            )
                

            }
            </ul>
           
        </div>
    )
}

export default RestuarantMenu;