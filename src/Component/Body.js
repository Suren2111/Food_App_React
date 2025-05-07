import { useEffect, useState,useMemo,useCallback,memo} from "react";
import useRestuarantlists from "../utils/useRestuarantlists";
import RestuarantCards, { withPromotedLabel } from "./RestuarantCards";
import Shimmer from "./Shimmer";
import { chennai_URL,delhi_URL,mumbai_URL,bangalore_URL } from "../utils/constants";
import NoLocation from "./NoLocation";
const MemoizedRestaurantCard = memo(RestuarantCards);
const MemoizedPromotedRestaurant = memo(withPromotedLabel(RestuarantCards));


const Body = () => {

    const [resApi, setResApi] = useState(chennai_URL);
    const res = useRestuarantlists(resApi);
    const[isserviceAvailable,setIsServiceAvilable]=useState(false)
    const [resDetails,setResDetails]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const[location,setLocation]=useState("Chennai");
    // const PromotedRestuarant = withPromotedLabel(RestuarantCards);
    const[value,setValue]=useState(0);

    useEffect(() => {
    if(res==="Location Unserviceable"){
        setIsLoading(false);
        setIsServiceAvilable(true); 
    }
    else if (res && res.length > 0) {
        setIsLoading(false);
        setResDetails(res);
        
    }

}, [res]);


    const filteredRestuarants=(filterType)=>{
        if(filterType=="ALL"){
            setResDetails(res);
            return;
        }
        let filtered=[...res];
        switch (filterType) {
             case 'FAST':
                 filtered = filtered.filter((r) => r.info.sla.deliveryTime <= 23);
                 break;
             case 'RATING':
                 filtered = filtered.filter((r) => r.info.avgRating > 4.5);
                 break;
             case 'PROMOTED':
                 filtered = filtered.filter((r) => r.info.avgRating > 4.2);
                 break;
             default:
                 break;
         }
     
         setResDetails(filtered);
     }

    const searchRestuarant = useCallback((e) => {
        const restuarant=res.filter((restuarant)=>{
                return restuarant.info.name.toLowerCase().includes(e.target.value.toLowerCase());
            })
         setResDetails(restuarant);
    },[res]);

    const ShowResOnCity = (RES_API,city) => {
        setIsLoading(true);
        setResApi(RES_API);
        setLocation(city);
    };

    const ShowResonLocation = () => {
        if ("geolocation" in navigator) {
            // Check if geolocation is available
            navigator.geolocation.getCurrentPosition(
                function (position) {

                    setIsLoading(true);
                    setResApi(
                        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=" +
                        position.coords.latitude +
                        "&lng=" +
                        position.coords.longitude +
                        "&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
                    );

                    //No Location lotitude and longitude
                    // setResApi(
                    //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=" +
                    //     "28.6139" +
                    //     "&lng=" +
                    //     "78.9629" +
                    //     "&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
                    // );

                    async function getCityName(lat, lon) {
                        try {
                            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
                            //city name undefined:
                            //const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=28.6139&lon=78.9629`);
                            const data = await response.json();
                            console.log(data);
                            setLocation(data.address.city);
                        } catch (error) {
                            console.error("Error fetching city:", error);
                            return "Error fetching city";
                        }
                    }
                    
                    getCityName(position.coords.latitude, position.coords.longitude);
                    
                    
                },
                function (error) {
                    alert("Please enable the location"+ error.message)

                    // console.log("Error: " + error.message);
                },
                
            );
        } else {
            alert("Geolocation is not available in this browser")
            // console.log("Geolocation is not available in this browser.");
        }
    };

    function debounceFunction(searchRestuarant,delay){
        let timer;
        return function(e){
          clearTimeout(timer);
          timer=setTimeout(()=>{
             searchRestuarant(e);
          },delay)
        }
    }

const debounce=useMemo(()=>debounceFunction(searchRestuarant,500),[searchRestuarant])

const handleBackToHome = () => {
    setIsServiceAvilable(false);
    setResApi(chennai_URL);
    setLocation("Chennai");
    setIsLoading(true);
};

    return isLoading  ? (
        <Shimmer />
    ) 
    :
    isserviceAvailable ? <NoLocation onBackToHome={handleBackToHome} />
    :
    (
        <div className="bg-white dark:bg-gray-800 text-black dark:text-white pt-32">
            <div className="p-8 mx-8">
                <button
                    className="border border-neutral-400  rounded-lg p-3 hover:bg-gray-200 "
                    onClick={ShowResonLocation}
                >
                    Your Location
                </button>
                <button
                    className="border border-neutral-400 p-3 rounded-lg m-3 hover:bg-gray-200"
                    onClick={() =>
                        ShowResOnCity(
                            mumbai_URL,
                            "Mumbai"
                        )
                    }
                >
                    Mumbai
                </button>
                <button
                    className="border border-neutral-400 p-3 rounded-lg m-3 hover:bg-gray-200"
                    onClick={() =>
                        ShowResOnCity(
                            bangalore_URL,
                            "Bangalore"
                        )
                    }
                >
                    Bangalore
                </button>
                <button
                    className="border border-neutral-400 p-3 rounded-lg m-3 hover:bg-gray-200"
                    onClick={() =>
                        ShowResOnCity(
                            delhi_URL,
                            "Delhi"
                        )
                    }
                >
                    Delhi
                </button>
            </div>

            <div className="flex justify-between  mx-8 p-8">
                <h1 className="font-bold text-xl">
                    Restuarants with online Food Delivery in {location}
                </h1>
                <div></div>
            </div>

            <div className="flex mx-8 p-8">
                <input
                    className="border border-neutral-400 p-2 rounded-lg dark:bg-gray-800 text-black dark:text-white"
                    placeholder="Restuarants"
                    data-testid="SearchInput"
                    id="searchInput"
                    name="search"
                    onChange={(e) => debounce(e)}
                ></input>
                <button
                    className="rounded-xl border border-neutral-400 p-2 mx-4"
                    onClick={() => filteredRestuarants("ALL")}
                >
                    {" "}
                    ALL
                </button>
                <button
                    className="rounded-xl border border-neutral-400 p-2 mx-4"
                    onClick={() => filteredRestuarants("FAST")}
                >
                    {" "}
                    Fast Delievery
                </button>
                <button
                    className="rounded-xl border border-neutral-400 p-2 mx-4"
                    onClick={() => filteredRestuarants("RATING")}
                >
                    {" "}
                    Ratings 4.5+
                </button>
                <button
                    className="rounded-xl border border-neutral-400 p-2 mx-4"
                    onClick={() => filteredRestuarants("PROMOTED")}
                >
                    {" "}
                    Promoted
                </button>
                
            </div>
            

            {(resDetails && resDetails.length==0) ? (
                <div className="text-center text-lg font-semibold pt-5">
                    <h1>No restaurants match your search in {location}.</h1>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8 mx-8">
                    {/* {resDetails && resDetails.map((restuarant) => {
                        return (
                            <div key={restuarant.info.id} data-testid="Restuarants">
                                {restuarant.info.avgRating > 4.2 ? (
                                    <PromotedRestuarant rescard={restuarant} />
                                ) : (
                                    <RestuarantCards rescard={restuarant} />
                                )}
                            </div>
                        );
                    })} */}

                    {resDetails?.map((restaurant) => (
  restaurant.info.avgRating > 4.2 ? (
    <MemoizedPromotedRestaurant key={restaurant.info.id} rescard={restaurant} />
  ) : (
    <MemoizedRestaurantCard key={restaurant.info.id} rescard={restaurant} />
  )
))}
                </div>
            )}
            
        </div>
    );
};

export default Body;
