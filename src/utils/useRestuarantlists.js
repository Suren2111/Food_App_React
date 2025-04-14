import { useState,useEffect } from "react";

const useRestuarantlists=(RES_API)=>{
    const[res,setRes]=useState([]);
    useEffect(()=>{
        fetchData(RES_API);
    },[RES_API])  


    const fetchData= async (RES_API) =>{

        const data = await fetch("https://thingproxy.freeboard.io/fetch/" + RES_API);   
        const jsondata=await data.json();
        setRes(jsondata.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       
    }



    return res
}

export default useRestuarantlists;