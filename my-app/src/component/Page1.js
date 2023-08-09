import React from "react";
import BoxRecommendation from "./BoxRecommentation";
import BoxSearch from "./BoxSearch";

export default function Page1() {
    return (
        <div className="relative bg-white w-full h-[832px] overflow-hidden text-center text-41xl text-yellowgreen font-jomhuria">
        <img
          className="absolute top-[0px] left-[0px] w-[100%] h-[572px] object-cover"
          alt=""
          src="/istockphoto1038870630612x612-1@2x.png"
        />
        <img
          className="absolute top-[0px] left-[0px] w-[100%] h-[572px] object-cover opacity-[0.8]"
          alt=""
          src="/rectangle-1.svg"
        />
        <div className="absolute mx-auto top-[224px] left-[240px] text-[70px] text-white text-left inline-block w-[80%] h-[auto]">{`Discover the Swiss through hiking `}</div>
       
        <BoxRecommendation />
        <BoxSearch />
      </div>
    );
    }