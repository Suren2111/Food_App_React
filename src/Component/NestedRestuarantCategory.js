import ItemCategoryList from "./ItemCategoryList";
import RestuarantCategory from "./RestuarantCategory";
const NestedRestuarantCategory=({cards,showItems,setShowIndex,index,showIndex})=>{
    // console.log(cards);
    return(
        <div className="">
            {
            <h1 className="font-extrabold py-3 text-left">{cards?.card?.card?.title}</h1>
           
            }
             {
                
                cards?.card?.card?.categories.map((c)=>{
                    return(
                        < RestuarantCategory 
                         key={c?.title}
                         itemCards={c?.itemCards}
                         showItems={index===showIndex ? true : false}
                         setShowIndex={setShowIndex}
                         index={index}
                         title={c?.title}
                />
                    )
                })
            }
            
        </div>
    )
}

export default NestedRestuarantCategory;