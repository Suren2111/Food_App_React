import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./Component/Header";
import Body from "./Component/Body";
import Footer from "./Component/Footer";


const Applayout=() =>{
   return (
    <>
       <div>
        <Header />
        <Body />
        <Footer />
       </div>
       </>
   )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />)