import { useEffect } from "react";
import {useState} from "react";
import { MENU_API } from "../utils/constants";

const useRestuarantMenu=(resId)=>{
     const[resDetails,setResDetails]=useState(null);
     useEffect(()=>{
        fetchdata();
     },[])

     
     const fetchdata=async ()=>{
        const resdata=await fetch("https://cors-anywhere.herokuapp.com/" + MENU_API+resId.resId);
        const data=await resdata.json();

        setResDetails(data);
    }

    return resDetails;

}

export default useRestuarantMenu;