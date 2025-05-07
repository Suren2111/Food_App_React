import ItemCategoryList from "./ItemCategoryList";
import { useMemo } from "react";

const RestuarantCategory=({itemCards,title,resCategory,isActive,setIsActiveCategory,uniqueId})=>{

     const HandleClick=()=>{
        setIsActiveCategory((prevuniqueId)=>{
        return prevuniqueId==uniqueId ? null: uniqueId;
      })
    }
    
        const filteredItems = useMemo(() => {
            return itemCards?.filter((c) =>
                resCategory.includes(c.card.info.itemAttribute.vegClassifier) ||
                resCategory.includes(c?.card?.info?.ribbon?.text)
            ) || [];
        }, [itemCards, resCategory]);

            return(

                <div>
                     
                    {/*acoordian title */}
        
                    <div  className="flex justify-between cursor-pointer font-semibold" onClick={()=>HandleClick()}>
                    {
                       <span className="font-bold text-lg">{title} ({filteredItems.length})</span>
                         
                    }
                    {
                       <span>{isActive ? "⬆" : "⬇"}</span>
                    }
                    </div>
        
                    {/*accordian body*/}


        
                    <div className="my-4 text-left  dark:bg-gray-800 text-black dark:text-white border-y-4">
                        {isActive && filteredItems && filteredItems.map((c)=>{

                            // console.log(c);
                            
                              return(
                                        
                                        <ItemCategoryList key={c?.card?.info?.id} items={c}/>
                                    )
                                    
                                
                                
                            
                         })}
                       
                 
                    </div>
           
                </div>
            )
    

    
}


export default RestuarantCategory;