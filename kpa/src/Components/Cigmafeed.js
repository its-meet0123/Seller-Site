import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import { CigmafeedData } from './Components/Data.js';
import "./Cigmafeed.css";
import Header from "./Header.js";
import FeedData from "./Feeddata.js";


function CigmaFeed(){
    
    return(
       <div className="shop">
        <Header />
        <FeedData />
       </div>
    );
}

export {CigmaFeed};