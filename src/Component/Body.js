import RestuarantCards from "./RestuarantCards";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const Body=() =>{
    const [restuarantlist,setRestuarantlist]=useState([]);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData= async () =>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9005743&lng=80.0931249&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsondata=await data.json();
        console.log(jsondata.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setRestuarantlist(jsondata.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    if(restuarantlist.length==0){
        return(
            <Shimmer/>
        )
    }
    return(
        <div className="body-container">
           <div className="filter">
               <button className="filter_btn"onClick={()=>{
                   const filter_restuarantlist=restuarantlist.filter(res =>{
                         return res.info.avgRating > 4.5
                        })
                         setRestuarantlist(filter_restuarantlist);
                         }}>Restuarant Filter
               </button> 
           </div>
           <div className="res-container">
             {
                 restuarantlist.map((restuarant) =>{
                 return <RestuarantCards key={restuarant.info.id} rescard={restuarant}/>
             })
             }
             {/* <RestuarantCards rescard={reslist[0]}/> */}
 
           </div>
        </div>
     )
 }

 export default Body;
 