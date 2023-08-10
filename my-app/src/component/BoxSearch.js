import React from "react";

export default function BoxSearch() {
    return (
      <div className="absolute top-[450px] left-[786px] bg-white shadow-[2px_4px_4px_5px_rgba(0,_0,_0,_0.4)] w-[430px] h-[229px] flex flex-col py-7 px-12 box-border items-center justify-end gap-[2px] Z-2">
      <img
        className="relative w-[163px] h-[163px] object-contain"
        alt=""
        src="/searchlocationsolidsvgrepocom-1@2x.png"
      />
      
      <div className="relative inline-block w-[334px] h-[52px] shrink-0 font-extrabold text-olivedrab font-jomhuria">
        <p className="m-0">Recherche</p>
        <p className="m-0">&nbsp;</p>
      </div>
    </div>
    );
  }