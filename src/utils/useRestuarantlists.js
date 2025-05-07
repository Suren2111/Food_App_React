import { useState,useEffect } from "react";

const useRestuarantlists=(RES_API)=>{
    const[res,setRes]=useState([]);
    // console.log(res);
    useEffect(()=>{
        fetchData(RES_API);
    },[RES_API])  


    const fetchData= async (RES_API) =>{

        const data = await fetch("https://dishfly.netlify.app/.netlify/functions/proxy" + RES_API);   
        const jsondata=await data.json();
        if(jsondata?.data?.cards[0]?.card?.card?.title==="Location Unserviceable"){
            setRes("Location Unserviceable")
        }
        else{
            setRes(jsondata.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
      
       
    }



    return res;
}

export default useRestuarantlists;