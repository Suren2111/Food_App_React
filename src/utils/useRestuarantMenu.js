import { useEffect } from "react";
import { useEffect, useState} from "react";
import { MENU_API } from "../utils/constants";

const useRestuarantMenu=(resId)=>{
     const[resDetails,setResDetails]=useState(null);
     useEffect(()=>{
        fetchdata();
     },[])

     const fetchdata=async ()=>{
        const resdata=await fetch(MENU_API+resId.resId);
        const data=await resdata.json();
        setResDetails(data);
    }

    return resDetails;

}

export default useRestuarantMenu;