import React from "react";
import RectangleVert from "./RectangleVert";


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
      <div className="absolute top-[25%] left-[25%] w-auto">
      <div className="absolute w-[500px] left-[300px]">
      <img
        className="absolute top-[0] left-[-25px] w-[50px] h-[50px] z-0 object-cover"
        alt=""
        src="/searchlocationsolidsvgrepocom-1@2x.png"
      />
      <label for="level" class="block text-sm text-gray-500 dark:text-gray-300 z-1">Recherche</label>

<input type="text" placeholder="Suisse" class="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
      </div>  
      <div>
        <div>
          <label for="level" class="block text-sm text-gray-500 dark:text-gray-300">Difficulté</label>

          <input type="text" placeholder="Easy" class="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
        </div>
        <div>
          <label for="level" class="block text-sm text-gray-500 dark:text-gray-300">Récompense</label>

          <input type="text" placeholder="Lac" class="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
        </div>
      </div>
      <button class="relative top-60 left-0 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-lime-700 rounded-lg hover:bg-lime-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 font-jomhuria ">
    En route !
</button>
      </div>
      
     
     

      <div className="absolute top-[790px] left-[0px] bg-olivedrab w-full h-[42px]" />
      <RectangleVert />
    </div>
  );
}