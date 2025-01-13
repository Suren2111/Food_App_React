import {useEffect, useState} from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestuarantlists from "../utils/useRestuarantlists";
import RestuarantCards,{withPromotedLabel}from "./RestuarantCards";
import { useSelector,useDispatch } from "react-redux";
import { filterrating,updateResDetails,filterFasterDelivery,filterPromoted,filterUI,updateLocationDetails} from "../utils/filterSlice";
import Carousel from "./Carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Offline_LOGO_URL } from "../utils/constants";
import { ShimmerPostList } from "react-shimmer-effects";
import { ShimmerSimpleGallery } from "react-shimmer-effects";

const Body=() =>{
    const [resApi,setResApi]=useState("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9005743&lng=80.0931249&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const {res,carousel}=useRestuarantlists(resApi);
    const resDetails=useSelector((store)=>store.restuarantfilter.restuarant);
    const carousellist=useSelector((store)=>store.restuarantfilter.carousellist);
    const location=useSelector((store)=>store.restuarantfilter.location);
    const onlineStatus=useOnlineStatus();
    const PromotedRestuarant=withPromotedLabel(RestuarantCards);
    const dispatch=useDispatch();
    const name=useSelector((store)=>store.user.userName);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };

    useEffect(()=>{
        dispatch(updateResDetails({res,carousel}))
    },[res,carousel]);

    const filterRestuarantOnRating=(res)=>{
        dispatch(filterrating(res));
    }

    const filterFasterDelievery=(res)=>{
        dispatch(filterFasterDelivery(res));
    }

    const filterByCuisines=(res)=>{
        dispatch(filterFasterDelivery(res));
    }

    const filterRestuarantOnPromoted=(res)=>{
        dispatch(filterPromoted(res));
    }

    const searchRestuarant=(e,res)=>{
        const obj={
            "search":e.target.value,
            "resdetails":res
        }
       dispatch(filterUI(obj));

    }

    const ShowResOnCity=(RES_API)=>{
       setResApi(RES_API);
    }

    const ShowResonLocation=()=>{
        if ("geolocation" in navigator) {
            // Check if geolocation is available
            navigator.geolocation.getCurrentPosition(function(position) {
                // console.log("Latitude: " + position.coords.latitude);
                // console.log("Longitude: " + position.coords.longitude);
                setResApi("https://www.swiggy.com/dapi/restaurants/list/v5?lat="+position.coords.latitude+"&lng="+position.coords.longitude+"&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            }, function(error) {
                console.log("Error: " + error.message);
            });
        } else {
            console.log("Geolocation is not available in this browser.");
        }
        
    }

    if(!onlineStatus) return(
        <div>
        <img src={Offline_LOGO_URL}></img>
        <h1>You're offline Please check the Internet Connection</h1>
        </div>
    ) 

    return  resDetails.length===0 ? 

    <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />
    
    :(

       
       
        <div className="bg-white dark:bg-gray-800 text-black dark:text-white pt-32">

            <div className="p-5 m-5">
                <button className="border border-neutral-400 p-3 rounded-lg m-3 hover:bg-gray-200" onClick={ShowResonLocation}>Your Location</button>
                <button className="border border-neutral-400 p-3 rounded-lg m-3 hover:bg-gray-200" onClick={()=>ShowResOnCity("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")}>Mumbai</button>
                <button className="border border-neutral-400 p-3 rounded-lg m-3 hover:bg-gray-200" onClick={()=>ShowResOnCity("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")}>Bangalore</button>
                <button className="border border-neutral-400 p-3 rounded-lg m-3 hover:bg-gray-200" onClick={()=>ShowResOnCity("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")}>Delhi</button>
            </div>

         <div>
            <div className="flex p-8 mx-8">
                <h1 className="font-bold text-xl">What's on your mind?</h1>
            </div>
              
                
            <div className="flex justify-between mx-8">
                <Slider {...settings} className="w-full h-auto">
                    {
                        
                         carousellist && carousellist.map((carousel)=>{
                            return(
                                
                                <Carousel carousel={carousel} key={carousel.id}/>
                                
                            )
                        })

                    }
               
               </Slider>
            </div>
  
         </div>

            <div className="flex justify-between  mx-8 p-8">
            <h1 className="font-bold text-xl">Restuarants with online Food Delivery in {location}</h1>
            <div>
            </div>
            </div>

           
            
           <div className="flex justify-evenly m-2 p-2">
           <input className="border border-neutral-400 p-2 rounded-lg" placeholder="Restuarants" onChange={(e)=>searchRestuarant(e,res)}></input>
           <button className="rounded-xl border border-neutral-400 p-2" onClick={()=>filterFasterDelievery(res)}> Fast Delievery</button>
           <button className="rounded-xl border border-neutral-400 p-2" onClick={()=>filterRestuarantOnRating(res)}> Ratings 4.5+</button>
           <button className="rounded-xl border border-neutral-400 p-2"> RS. 300-RS. 600</button>
           <button className="rounded-xl border border-neutral-400 p-2"> Less than RS. 300</button>
           <button className="rounded-xl border border-neutral-400 p-2" onClick={()=>filterRestuarantOnPromoted(res)}> Promoted</button>
           </div>
          
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
             {

         resDetails.map((restuarant) =>{
                 return (
                    <div key={restuarant.info.id}>
                         
                         

                        {
                           

                           restuarant.info.avgRating> 4.2 ? <PromotedRestuarant  rescard={restuarant}/> : <RestuarantCards rescard={restuarant}/>
                            
                            
                        }

                        
                        
                        
                    </div>
                   
                 )
             })

             }
            </div>

           
        </div>
       
     )
 }
 
 export default Body;
 