import { useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";



const RestuarantMenu=()=>{
    const [resDetails, SetResDetails]=useState(null);
    const resid=useParams();
    useEffect(()=>{
      fetchMenu();
    },[])

const fetchMenu=async ()=>{
    const resdata=await fetch(MENU_API+resid.resId);
    const data=await resdata.json();
    SetResDetails(data);
}

if(resDetails===null) return <Shimmer />

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