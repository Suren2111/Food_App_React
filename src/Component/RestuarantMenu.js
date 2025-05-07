import useRestuarantMenu from "../utils/useRestuarantMenu";
import { useParams } from "react-router-dom";
import RestuarantCategory from "./RestuarantCategory";
import {useState} from "react";
import NestedRestuarantCategory from "./NestedRestuarantCategory";
import Shimmer from "./Shimmer";
import { useMemo } from "react";


const RestuarantMenu=()=>{
    const resid=useParams();
    const res=useRestuarantMenu(resid);
    const[resCategory,setResCategory]=useState(["VEG","NONVEG"]);
    const[isActiveCategory,setIsActiveCategory]=useState(null);

    const resDetails = useMemo(() => {
        return res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((card) => {
            return ![
                "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel",
                "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
            ].includes(card?.card?.card?.["@type"]);
        });
    }, [res]);
    


if(!res){

   return(
      <Shimmer />
   )
    
}


const{name,cuisines,areaName
    ,avgRating,costForTwoMessage,sla,totalRatingsString
}=res?.data?.cards[2]?.card?.card.info




const ShowResByCategory=(category)=>{

   if(JSON.stringify(resCategory)!==JSON.stringify(category)){
   setResCategory(category);
   }


}

 return(
        <div className="dark:bg-gray-800 text-black dark:text-white w-full pt-32">

     <div className="w-6/12 mx-auto  bg-white dark:bg-gray-800 text-black dark:text-white">
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
                resDetails && resDetails.map((c)=>{ 
                   
                    if(c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"){
                        return(

                            <NestedRestuarantCategory 
                             cards={c}
                             key={c?.card?.card.title}
                             resCategory={resCategory}
                             setIsActiveCategory={setIsActiveCategory}
                             isActiveCategory={isActiveCategory}
                             />

                         )

                        
                    } 


                return(
                   
                < RestuarantCategory 
                key={c?.card?.card.title}
                itemCards={c?.card?.card?.itemCards}
                title={c?.card?.card.title}
                resCategory={resCategory}
                isActive={isActiveCategory===c?.card?.card.title ? true:false}
                setIsActiveCategory={setIsActiveCategory}
                uniqueId={c?.card?.card.title}
                />

                ) 
                })
            }
            </div>

            
           
            
           
        </div>
        
    )
}

export default RestuarantMenu;