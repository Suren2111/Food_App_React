import { useEffect,useState } from "react";

const useHook1=()=>{
const [name,setName]=useState("suren");
   
console.log("custom hook "+name);

 useEffect(()=>{
        console.log("custom hook useEffect is called "+name);
        setName("lokesh");
   
    },[])

return name;

}

export default useHook1;