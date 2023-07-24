import React from "react";
import logo from "../../imgs/logo.png";
import SearchBox from "./SearchBox";
const Banner = () => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo}/>
        <div>
          <span>A place to </span>
          <span id="get-part">get</span>
          <SearchBox id= "search"/>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
