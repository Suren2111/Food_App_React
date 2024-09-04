import { useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";



const RestuarantMenu=()=>{
    const [resDetails, SetResDetails]=useState(null);
    useEffect(()=>{
      fetchMenu();
    },[])

const fetchMenu=async ()=>{
    const resdata=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9005743&lng=80.0931249&restaurantId=767212&catalog_qa=undefined&submitAction=ENTER");
    const data=await resdata.json();
    console.log(data);
    SetResDetails(data);
}

if(resDetails===null) return <Shimmer />

const{name,cloudinaryImageId,cuisines,locality}=resDetails.data?.cards[2]?.card?.card.info

 return(
        <div className="restuarant-menu">
            <h1>{name}</h1>
            <img className="card-logo" src={CDN_URL+cloudinaryImageId}></img>
            <h2>{cuisines}</h2>
            <h3>{locality}</h3>
        </div>
    )
}

export default RestuarantMenu;