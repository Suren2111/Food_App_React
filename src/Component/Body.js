import RestuarantCards from "./RestuarantCards";
import { reslist } from "../utils/mockdata";

const Body=() =>{
    return(
         <div className="body-container">
         <h2>Search bar</h2>
         <div className="res-container">
             {
                 reslist.map((restuarant) =>{
                 return <RestuarantCards key={restuarant.info.id} rescard={restuarant}/>
             })
             }
             {/* <RestuarantCards rescard={reslist[0]}/> */}
 
         </div>
         </div>
     )
 }

 export default Body;
 