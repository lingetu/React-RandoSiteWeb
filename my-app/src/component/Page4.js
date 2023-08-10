import React from "react";
import RectangleVert from "./RectangleVert";

export default function Page4() {
    return (
      <div className=" font-extrabold relative bg-white w-full h-[832px] overflow-hidden text-left text-51xl text-olivedrab font-jomhuria">
      <div className="absolute top-[72px] left-[98px] inline-block w-[814px] h-[69px] text-4xl">
        Notre seconde randonné (Normal)
      </div>
      <div className="absolute top-[195px] left-[98px] text-29xl inline-block w-[489px] h-[381px]">
        <p className="m-0 text-2xl">
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
        className="absolute top-[87px] left-[820px] w-[370px] h-[562px] object-cover"
        alt=""
        src="/freephotoofsnowwoodlandscapemountains-1@2x.png"
      />
      <RectangleVert />
    </div>
    );
    }