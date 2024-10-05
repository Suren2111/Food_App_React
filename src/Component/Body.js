import RestuarantCards from "./RestuarantCards";
import { useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestuarantlists from "../utils/useRestuarantlists";
import useFilteredRestuarant from "../utils/useFilteredRestuarant";

const Body=() =>{
    const[searchText,setSearchText]=useState("");
    const resDetails=useRestuarantlists();
    const[filteredreslist,setFilteredreslist]=useState(resDetails);
    const onlineStatus=useOnlineStatus();
    useEffect(()=>{
        setFilteredreslist(resDetails);
    },[resDetails]);
    if(!onlineStatus) return <h1>You're offline Please check the Internet Connection</h1>

    return  resDetails.length===0 ? <Shimmer /> :(
   
        <div className="body-container">
            
           <div className="filter">
               <div className="search-box">
                    <input text="text" value={searchText} onChange={(e)=>{
                       setSearchText(e.target.value);
                    }}></input>
                    <button onClick={()=>{
                        const searchres=resDetails.filter((res)=>{
                           return res.info.name.toLowerCase().includes(searchText.toLowerCase()); 
                        })
                        setFilteredreslist(searchres);
                    }}> Search</button>
               </div>
               <button className="filter_btn" onClick={()=>{
                   const filter_restuarantlist=resDetails.filter(res =>{
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
 