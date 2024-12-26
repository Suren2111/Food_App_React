import { ShimmerTitle } from "react-shimmer-effects";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useContext} from "react";
import exampleContext from '../utils/exampleContext';
import { useSelector } from "react-redux";
// import { updateUserName } from "../utils/userSlice";



const Footer=() =>{
  const {name}=useContext(exampleContext);
  
  const userName1=useSelector((store)=>store.example.userName1);


  useEffect(()=>{
  },[])


   return(
    <div>
    </div>
   )
   
}

export default Footer;