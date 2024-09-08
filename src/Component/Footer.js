import { ShimmerTitle } from "react-shimmer-effects";
import { useEffect, useState } from "react";
const Footer=() =>{
  const[shimmerData,setShimmerData]=useState(null);
  useEffect(()=>{
      setShimmerData(true);
  })
  if(shimmerData==null){
    // console.log("Shimmer is called");
    return <ShimmerTitle line={2} gap={10} variant="primary" />;
  }

  // console.log("Footer is called");
  return(
    <div className="footer-cont">
       <h2>This is Footer Page</h2> 
       <h3>For better experience,download the Quick Chef app now🌈</h3>
       <h4>copyright@QuickChef</h4>
    </div>
)
   
}

export default Footer;