import * as obj_harcoded from "../utils/constants";

const RestuarantCards=(props)=>{
    const {rescard}=props;
    const{name, costForTwo,cuisines,cloudinaryImageId, avgRating}= rescard?.info
    return(
            <div className="res-card">
              <img className="card-logo" src={obj_harcoded.CDN_URL+cloudinaryImageId} alt="Restuarant Image" />
              <h2>{name}</h2>
              <h3>{costForTwo}</h3>
              <h4>{cuisines.join(",")}</h4>
              <h3>{avgRating}</h3>
            </div>         
    )
}

export default RestuarantCards;