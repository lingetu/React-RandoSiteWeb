import React from "react";
import RectangleVert from "./RectangleVert";


export default function Page6() {
    return (
      <div className="relative bg-white w-full h-[100vh] overflow-hidden text-left text-51xl text-olivedrab font-jomhuria">
      <img
        className="absolute top-[76px] left-[132px] w-[124px] h-[118px] object-cover"
        alt=""
        src="/searchlocationsolidsvgrepocom-1@2x.png"
      />
      <div className="absolute top-[99px] left-[352px] inline-block w-[682px] h-[71px] text-4xl">
        Trouvez la balade qui vous correspond
      </div>
      <div className="absolute top-[790px] left-[0px] bg-olivedrab w-[1280px] h-[42px]" />
      <RectangleVert />
    </div>
    );
    }