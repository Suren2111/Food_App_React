import RestuarantCategory from "./RestuarantCategory";
import { useState } from "react";
const NestedRestuarantCategory=({cards,resCategory,setIsActiveCategory,isActiveCategory})=>{
    return(
        <div className="">
            {
            <h1 className="font-extrabold py-3 text-left">{cards?.card?.card?.title}</h1>
           
            }
             {
                
                cards?.card?.card?.categories?.map((c)=>{

                    // console.log(c);
                    return(
                        < RestuarantCategory 
                        key={c?.title}
                        itemCards={c?.itemCards}
                        title={c?.title}
                        resCategory={resCategory}
                        isActive={isActiveCategory===c?.title ? true:false}
                        setIsActiveCategory={setIsActiveCategory}
                        uniqueId={c?.title}
               />
                    )
                })
            }
            
        </div>
    )
}

export default NestedRestuarantCategory;