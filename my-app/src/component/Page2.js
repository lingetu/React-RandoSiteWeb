import React from "react";

export default function Page2() {
    return (
        <div className="relative bg-white w-full h-[832px] overflow-hidden text-left text-51xl text-olivedrab font-jomhuria">
      <div className="absolute top-[82px] left-[89px] inline-block w-[814px] h-[69px]">
        Decouvrez des paysages fabuleux
      </div>
      <div className="absolute top-[205px] left-[252px] text-29xl inline-block w-[489px] h-[381px]">
        <p className="m-0">{`Grace à nos recommendations découvrez des paysages fabuleux pour petits et grands. `}</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">
          Arpentez les sentiers que nous vous avons préparez, il y en a pour
          tous les niveaux, que vous soyez débutant ou expérimenté, venez
          découvrir la suisse !
        </p>
      </div>
      <img
        className="absolute top-[75px] left-[774px] w-[416px] h-[559px] object-cover"
        alt=""
        src="/pexelsphoto7624986-1@2x.png"
      />
    </div>
    );
    }