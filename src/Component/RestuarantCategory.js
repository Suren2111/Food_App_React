import ItemCategoryList from "./ItemCategoryList";
import {useState} from "react";

const RestuarantCategory=({cards,showItems,setShowIndex,index})=>{

    const HandleClick=(index)=>{
        setShowIndex((prevIndex)=>{
        return prevIndex==index ? null: index
      })
    }

    return(
        <div className="text-center w-6/12 mx-auto my-4 bg-gray-50  dark:bg-gray-800 text-black dark:text-white">
            {/*acoordian title */}

            <div  className="flex justify-between cursor-pointer" onClick={()=>HandleClick(index)}>

            <span className="font-bold text-lg">{cards?.card?.card.title} ({cards?.card?.card?.itemCards.length})</span>
            <span>⬇</span>


            </div>

            {/*accordian body*/}
            <div className="my-4 text-left  dark:bg-gray-800 text-black dark:text-white">
                {showItems && cards?.card?.card?.itemCards.map((c)=>{
                    return(
                        <ItemCategoryList key={cards?.cards?.card?.card?.itemCards?.card?.info?.id} items={c}/>
                    )
                 })}
               
         
            </div>
   
        </div>
    )
}

export default RestuarantCategory;