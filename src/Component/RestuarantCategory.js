import ItemCategoryList from "./ItemCategoryList";
import {useState} from "react";
import { useSelector} from "react-redux";


const RestuarantCategory=({itemCards,showItems,setShowIndex,index,title})=>{
    const resCategory=useSelector((store)=>store.resMenufilter.resCategory);
    
        const HandleClick=(index)=>{
        setShowIndex((prevIndex)=>{
        return prevIndex==index ? null: index;
      })
    }

    const categoryLength=itemCards?.filter((c)=>{
        if(resCategory.includes(c.card.info.itemAttribute.vegClassifier) || resCategory.includes(c?.card?.info?.ribbon?.text)){
            return c;
        }}).length;

        if(categoryLength>0){
            return(

                <div>
                     
                    {/*acoordian title */}
        
                    <div  className="flex justify-between cursor-pointer font-semibold" onClick={()=>HandleClick(index)}>
                    {
                       <span className="font-bold text-lg">{title} ({categoryLength|| 0})</span>
                         
                    }
                    {
                       <span>⬇</span> 
                    }
                    </div>
        
                    {/*accordian body*/}
        
                    <div className="my-4 text-left  dark:bg-gray-800 text-black dark:text-white border-y-4">
                        {showItems && itemCards.map((c)=>{

                            // console.log(c);
                            
                                if((resCategory.includes(c.card.info.itemAttribute.vegClassifier) || resCategory.includes(c?.card?.info?.ribbon?.text))){
                                    return(
                                        
                                        <ItemCategoryList key={c?.card?.info?.id} items={c}/>
                                    )
                                    
                                }
                                
                            
                         })}
                       
                 
                    </div>
           
                </div>
            )
        }

    
}


export default RestuarantCategory;