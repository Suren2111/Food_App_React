import RestuarantCards from "./RestuarantCards";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body=() =>{
    const [restuarantlist,setRestuarantlist]=useState([]);
    const [searchText,setSearchText]=useState("");
    const[filteredreslist,setFilteredreslist]=useState([]);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData= async () =>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9005743&lng=80.0931249&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsondata=await data.json();
        // console.log(jsondata.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setRestuarantlist(jsondata.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredreslist(jsondata.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return restuarantlist.length==0 ? <Shimmer /> :(
        <div className="body-container">
            
           <div className="filter">
               <div className="search-box">
                    <input text="text"value={searchText} onChange={(e)=>{
                       setSearchText(e.target.value);
                    }}></input>
                    <button onClick={()=>{
                        const searchres=restuarantlist.filter((res)=>{
                           return res.info.name.toLowerCase().includes(searchText.toLowerCase()); 
                        })
                        setFilteredreslist(searchres);
                    }}> Search</button>
               </div>
               <button className="filter_btn"onClick={()=>{
                   const filter_restuarantlist=restuarantlist.filter(res =>{
                         return res.info.avgRating > 4.5
                        })
                        setFilteredreslist(filter_restuarantlist);
                         }}>Restuarant Filter
               </button> 
           </div>
           <div className="res-container">
             {
                 filteredreslist.map((restuarant) =>{
                 return (
                    <div>
                         
                         <RestuarantCards key={restuarant.info.id} rescard={restuarant}/>
                        
                        
                    </div>
                   
                 )
             })
             }
 
           </div>
        </div>
     )
 }

 export default Body;
 