
import useRestuarantMenu from "../utils/useRestuarantMenu";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import RestuarantCategory from "./RestuarantCategory";
import {useState} from "react";
import { useSelector,useDispatch} from "react-redux";
import { filterMenuonres,filterResCategory,filterResBestSeller } from "../utils/resMenuSlice";
import NestedRestuarantCategory from "./NestedRestuarantCategory";

const RestuarantMenu=()=>{
    const resid=useParams();
    const res=useRestuarantMenu(resid);
    const resDetails=useSelector((store)=>store.resMenufilter.resMenu);
    const dispatch=useDispatch();
    dispatch(filterMenuonres(res));
    const [showIndex,setShowIndex]=useState(null);

if(resDetails.length==0){

    return(
    <h1>Loading....</h1>
    )
    
}
const{name,cuisines,areaName
    ,avgRating,costForTwoMessage,sla,totalRatingsString
}=resDetails.data?.cards[2]?.card?.card.info

const ShowResByCategory=(category)=>{
   dispatch(filterResCategory(category));
}


const categories=resDetails.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((card)=>{
    return( 
!["type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge" , 'type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel' , 'type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo' , 'type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress'].includes( card?.card?.card?.["@type"])
    )
   })




 return(
        <div className="dark:bg-gray-800 text-black dark:text-white w-full pt-32">
           
            <div className="w-6/12 mx-auto  bg-white ">
            <h1 className="font-bold text-2xl py-3">{name}</h1> 
            <div className="flex py-2">
            <h2>⭐</h2>
            <h2>{avgRating} ({totalRatingsString})</h2>
            <h2 className="px-3">{costForTwoMessage}</h2>
            </div>
            <h2 className="py-1">{cuisines.join(" ")}</h2>
            <h2 className="py-1">Outlet - {areaName}</h2>
            <h2 className="py-1">⏳{sla.slaString}</h2>
            </div>

            <div className="text-center">
                <h1>Menu</h1>
            </div>

            <div className="w-6/12 mx-auto py-3">
                <button className="pr-2 border border-gray-400 px-2 mr-6 rounded-lg hover:bg-slate-300" onClick={()=>ShowResByCategory(["VEG","NONVEG"])}>All</button>
                <button className="pr-2 border border-gray-400 px-2 mr-6 rounded-lg hover:bg-slate-300" onClick={()=>ShowResByCategory(["VEG"])}>Veg</button>
                <button className="pr-2 border border-gray-400 px-2 mr-6 rounded-lg hover:bg-slate-300" onClick={()=>ShowResByCategory(["NONVEG"])}>Non-Veg</button>
                <button className="pr-2 border border-gray-400 px-2 mr-6 rounded-lg hover:bg-slate-300" onClick={()=>ShowResByCategory(["Bestseller"])}>BestSeller</button>
            </div>
            

            <div className="text-center w-6/12 mx-auto my-4 bg-gray-50  dark:bg-gray-800 text-black dark:text-white">
            {
                categories.map((c,index)=>{ 
                    if(c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"){
                        return(
                            <NestedRestuarantCategory 
                             cards={c}
                             showItems={index===showIndex ? true : false}
                             setShowIndex={setShowIndex}
                             index={index}
                             showIndex={showIndex}
                             />
                        ) 
                    } 
                return(
                   
                < RestuarantCategory 
                key={c?.card?.card.title}
                itemCards={c?.card?.card?.itemCards}
                showItems={index===showIndex ? true : false}
                setShowIndex={setShowIndex}
                index={index}
                title={c?.card?.card.title}
                />

                ) 
                })
            }
            </div>

            
           
            
           
        </div>
    )
}

export default RestuarantMenu;