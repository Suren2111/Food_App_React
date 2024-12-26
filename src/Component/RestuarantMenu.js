
import useRestuarantMenu from "../utils/useRestuarantMenu";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { ShimmerContentBlock } from "react-shimmer-effects";
import RestuarantCategory from "./RestuarantCategory";
import {useState} from "react";



const RestuarantMenu=()=>{
    const resid=useParams();
    const resDetails=useRestuarantMenu(resid);
    const [showIndex,setShowIndex]=useState(null);

if(resDetails===null){

    return(
    //     <ShimmerContentBlock
    //     title
    //     text
    //     cta
    //     thumbnailWidth={370}
    //     thumbnailHeight={370}
    //   />
    <h1>Loading....</h1>
    )
    
}
const{name,cloudinaryImageId,cuisines,locality}=resDetails.data?.cards[2]?.card?.card.info

const categories=resDetails.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
    return(
        c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
})
 return(
        <div className="text-center  dark:bg-gray-800 text-black dark:text-white">
            <img className="mx-auto my-4 w-10" src={CDN_URL+cloudinaryImageId} alt="React Image" />
            <h1 className="text-center font-bold my-6 text-xl">{name}</h1> 
            <h1 className="my-3 text-lg text-center font-bold">{cuisines}</h1>
            
            {
                categories.map((c,index)=>{ 
                return(
                < RestuarantCategory 
                key={c?.card?.card.title}
                cards={c}
                showItems={index===showIndex ? true : false}
                setShowIndex={setShowIndex}
                index={index}
                />

                ) 
                })
            }
            
           
        </div>
    )
}

export default RestuarantMenu;