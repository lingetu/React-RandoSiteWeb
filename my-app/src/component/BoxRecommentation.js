import React from "react";

export default function BoxRecommendation() {
    return (
        <div className="absolute top-[503px] left-[67px] bg-white shadow-[2px_4px_4px_5px_rgba(0,_0,_0,_0.4)] w-[430px] h-[229px] flex flex-col py-3 px-12 box-border items-center justify-start z-2">
      <img
        className="relative w-[163px] h-[163px] object-contain"
        alt=""
        src="/bookopensvgrepocom-1-1@2x.png"
      />
      <div className="self-stretch relative mt-[-26px] text-olivedrab font-jomhuria font-extrabold">
        <p className="m-0">Nos recommendations</p>
      </div>
    </div>
    );
  }