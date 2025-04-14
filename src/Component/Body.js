import { useEffect, useState,useMemo,useCallback} from "react";
import useRestuarantlists from "../utils/useRestuarantlists";
import RestuarantCards, { withPromotedLabel } from "./RestuarantCards";
import Shimmer from "./Shimmer";
import { chennai_URL,delhi_URL,mumbai_URL,bangalore_URL } from "../utils/constants";

const Body = () => {
    const [resApi, setResApi] = useState(chennai_URL);
    const res = useRestuarantlists(resApi);
    const [resDetails,setResDetails]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const[location,setLocation]=useState("Chennai");
    const PromotedRestuarant = withPromotedLabel(RestuarantCards);
    useEffect(() => {
        setResDetails(res); 
    }, [res]);

    useEffect(() => {
        if(isLoading && resDetails && resDetails.length>0) setIsLoading(false); 
    }, [resDetails]);

    const filteredRestuarants=(filterType)=>{
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
                    // console.log("Latitude: " + position.coords.latitude);
                    // console.log("Longitude: " + position.coords.longitude);
                    setIsLoading(true);
                    setResApi(
                        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=" +
                        position.coords.latitude +
                        "&lng=" +
                        position.coords.longitude +
                        "&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
                    );

                    async function getCityName(lat, lon) {
                        try {
                            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
                            const data = await response.json();
                            setLocation(data.address.city);
                        } catch (error) {
                            console.error("Error fetching city:", error);
                            return "Error fetching city";
                        }
                    }
                    
                    // Example Usage
                    getCityName(position.coords.latitude, position.coords.longitude);
                    
                    
                },
                function (error) {
                    console.log("Error: " + error.message);
                },
                
            );
        } else {
            console.log("Geolocation is not available in this browser.");
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

    return isLoading  ? (
        <Shimmer />
    ) : (
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
                <div className="flex items-center justify-center pt-5">
                    <img
                        src={
                            "data:image/png;base64,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"
                        }
                        className="m-auto"
                    ></img>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8 mx-8">
                    {resDetails && resDetails.map((restuarant) => {
                        return (
                            <div key={restuarant.info.id} data-testid="Restuarants">
                                {restuarant.info.avgRating > 4.2 ? (
                                    <PromotedRestuarant rescard={restuarant} />
                                ) : (
                                    <RestuarantCards rescard={restuarant} />
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Body;
