import { useState,useEffect } from "react";

const useRestuarantlists=(RES_API)=>{
    const[res,setRes]=useState([]);
    const[carousel,setCarousellist]=useState([]);
    useEffect(()=>{
        fetchData();
    },[RES_API])


    const fetchData= async () =>{
        const data=await fetch(RES_API);
        const jsondata=await data.json();
        setRes(jsondata.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setCarousellist(jsondata.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
    }



    return {res,carousel};
}

export default useRestuarantlists;