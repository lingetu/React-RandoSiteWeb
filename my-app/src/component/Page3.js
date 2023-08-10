import React from "react";
import RectangleVert from "./RectangleVert";

export default function Page3() {
    return (
      <div className=" font-extrabold relative bg-white w-full h-[832px] overflow-hidden text-left text-51xl text-olivedrab font-jomhuria">
      <div className="absolute top-[-38px] left-[-93px] rounded-[50%] bg-olivedrab w-[278px] h-[416px]" />
      <div className="absolute top-[127px] left-[616px] inline-block w-[814px] h-[69px] text-4xl">
        Notre première randonné (facile)
      </div>
      <div className="absolute top-[250px] left-[616px] text-29xl inline-block w-[489px] h-[381px]">
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
        className="absolute top-[75px] left-[84px] w-96 h-[575px] object-cover"
        alt=""
        src="/pexelsphoto13235410-1@2x.png"
      />
      <RectangleVert />
    </div>
    );
    }