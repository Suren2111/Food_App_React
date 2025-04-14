import RestuarantCategory from "./RestuarantCategory";
import { useState } from "react";
const NestedRestuarantCategory=({cards,resCategory})=>{
     const [showIndex,setShowIndex]=useState(null);
    return(
        <div className="">
            {
            <h1 className="font-extrabold py-3 text-left">{cards?.card?.card?.title}</h1>
           
            }
             {
                
                cards?.card?.card?.categories.map((c,index)=>{
                    return(
                        < RestuarantCategory 
                         key={c?.title}
                         itemCards={c?.itemCards}
                         showItems={index===showIndex ? true : false}
                         setShowIndex={setShowIndex}
                         index={index}
                         title={c?.title}
                         resCategory={resCategory}
                />
                    )
                })
            }
            
        </div>
    )
}

export default NestedRestuarantCategory;