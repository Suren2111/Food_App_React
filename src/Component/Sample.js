import { useState,useEffect } from "react"
import { useSample } from "../utils/useSample";

export const Sample=()=>{

    const[value,setValue]=useState(0);
    const[value1,setValue1]=useState(0);


    // console.log("Sample Component is rendered");
    useSample();

    useEffect(()=>{
        // console.log("useEffect in Sample Component is logged");
        setValue1(1);
    },[value])

    return(
        <div className="pt-32">

<h1>This is Sample</h1>
        <button onClick={()=>{
            setValue(1);
        }
        }>Click Me</button>

        </div>
        
    )

  
  
}
