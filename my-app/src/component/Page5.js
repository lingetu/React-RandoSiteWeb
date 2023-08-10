import React from "react";
import RectangleVert from "./RectangleVert";

export default function Page5() {
    return (
      <div className="relative font-extrabold bg-white w-full h-[832px] overflow-hidden text-left text-51xl text-olivedrab font-jomhuria">
      <div className="absolute top-[135px] left-[573px] inline-block w-[814px] h-[69px] text-4xl">
        Notre dernière randonné (difficile)
      </div>
      <div className="absolute top-[258px] left-[573px] text-29xl inline-block w-[489px] h-[381px] text-2xl">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0 text-2xl">
          {" "}
          Non pulvinar neque laoreet suspendisseLorem ipsum dolor sit amet.
        </p>
      </div>
      <img
        className="absolute top-[75px] left-[86px] w-[372px] h-[562px] object-cover"
        alt=""
        src="/pexelsphoto878150-1@2x.png"
      />
      <RectangleVert />
    </div>
    );
    }