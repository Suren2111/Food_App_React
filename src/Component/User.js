import { useState } from "react";
const User=({name,location,contact})=>{
    const[count]=useState(0);
    return(
        <div>
            <h1>count:{count}</h1>
            <h2>{name}</h2>
            <h3>{location}</h3>
            <h4>{contact}</h4>
        </div>
    )
}

export default User;