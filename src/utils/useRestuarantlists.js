import { useState,useEffect } from "react";
import { updateLocationDetails } from "./filterSlice";
import { useDispatch } from "react-redux";

const useRestuarantlists=(RES_API)=>{
    const dispatch=useDispatch();
    const[res,setRes]=useState([]);
    const[carousel,setCarousellist]=useState([]);
    useEffect(()=>{
        fetchData(RES_API);
    },[RES_API])


    const fetchData= async (RES_API) =>{
        const data = await fetch("https://thingproxy.freeboard.io/fetch/" + RES_API);


        const jsondata=await data.json();
        const location=jsondata.data.cards[11].card.card.citySlug;
        dispatch(updateLocationDetails(location.charAt(0).toUpperCase() + location.slice(1)));
        setRes(jsondata.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setCarousellist(jsondata.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
    }



    return {res,carousel};
}

export default useRestuarantlists;