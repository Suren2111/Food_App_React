import { useState,useEffect } from "react";

const useRestuarantlists=()=>{


    const[reslist,setReslist]=useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData= async () =>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9005743&lng=80.0931249&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsondata=await data.json();
        setReslist(jsondata.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }



    return reslist;
}

export default useRestuarantlists;