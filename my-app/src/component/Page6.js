import React from "react";
import RectangleVert from "./RectangleVert";
import MapJS from "./Map";
// import HikeMap from "./maptest";


export default function Page6() {
  return (
    <div className="relative font-extrabold bg-white w-full h-[100vh] overflow-hidden text-left text-51xl text-olivedrab font-jomhuria">
      <img
        className="absolute top-[76px] left-[132px] w-[124px] h-[118px] object-cover"
        alt=""
        src="/searchlocationsolidsvgrepocom-1@2x.png"
      />
      <div className="absolute top-[99px] left-[352px] inline-block w-[auto] h-[71px] text-4xl">
        Trouvez la balade qui vous correspond
      </div>

     <MapJS/>

      <div className="absolute top-[790px] left-[0px] bg-olivedrab w-full h-[42px]" />
      <RectangleVert />
    </div>
  );
}