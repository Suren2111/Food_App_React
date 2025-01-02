import { configureStore } from "@reduxjs/toolkit";
import Cartreducer from "./cartSlice"
import Userreducer from "./userSlice"
import Themereducer from "./themeSlice"
import Filterreducer from "./filterSlice"
import exampleReducer from "./exampleSlice"
import resMenuReducer from "./resMenuSlice"


const appStore=configureStore({
    reducer:{
       cart:Cartreducer,
       user:Userreducer,
       theme:Themereducer,
       restuarantfilter:Filterreducer,
       example:exampleReducer,
       resMenufilter:resMenuReducer

    }
});

export default appStore;