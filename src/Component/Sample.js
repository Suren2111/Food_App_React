import { Link } from "react-router-dom"


const Sample=()=>{
    console.log("Sample component")
    return(
        <div className="pt-48">
            <Link to={"/sample"}><button>Click me </button></Link>
            

        </div>
    )
}

export default Sample;