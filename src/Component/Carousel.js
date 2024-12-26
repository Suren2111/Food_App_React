import { Link } from "react-router-dom";
import { Carousel_URL } from "../utils/constants";
import Search from "./Search";
const Carousel=(props)=>{
    const {carousel}=props;
    return(
        <Link to="/search"><img className="w-44 hover:scale-105" src={Carousel_URL+carousel.imageId}></img></Link>
            
    )
}

export default Carousel;