import React from "react";
import ReactDOM from 'react-dom/client';

const RestuarantCards=()=>{
    return(
            <div className="res-card">
              <img className="card-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/250d7054-1254-4158-b1a5-67141ea2d51f_25881.JPG" alt="React Image" />
              <h2>Subway</h2>
              <h3>Salad, Snacks, Desserts</h3>
              <h4>Sollinganallur</h4>
            </div>         
    )
}

const Header=() =>{
    return(
        <div className="header-container">
            <div className="logo-container">
                  <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPSrUx8hhIIOCyMTdcrmSb-W3qtYThjB2z7A&s" alt="React Image" />
            </div>
            <div className="nav-container">
                <ul className="nav">
                   <li>Home</li>
                   <li>Cart</li>
                   <li>About Us</li>
                   <li>Contact Us</li>
                </ul>
           </div>
        </div>
           
    )
}

const Body=() =>{
   return(
        <div className="res-container">
            <RestuarantCards />
            <RestuarantCards />
            <RestuarantCards />
            <RestuarantCards />
            
        </div>
    )
}

const Footer=() =>{
    return(
        <div>
            
        </div>
    )
}

const Applayout=() =>{
   return (
       <div>
        <Header />
        <Body />
        <Footer />
       </div>
   )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />)