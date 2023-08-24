
import {useState, useEffect} from "react";

import { GoogleMap, useLoadScript, MarkerF, InfoWindowF} from "@react-google-maps/api";


export default function MapJS()  {

  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedReward, setSelectedReward] = useState("");


    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAl4sfVJd64D6DhkMYdKh2h4s1dTyX4aaY",
    });

    if (!isLoaded) return <div>"Loading..."</div>;
    
    return( <div><div className="absolute top-[25%] left-[25%] w-auto">
    <div className="absolute w-[500px] left-[300px]">
    <img
      className="absolute top-[0] left-[-25px] w-[50px] h-[50px] z-0 object-cover"
      alt=""
      src="/searchlocationsolidsvgrepocom-1@2x.png"
    />
    <label  className="block text-sm text-gray-500 dark:text-gray-300 z-1">Recherche</label>

<input type="text" placeholder="Suisse" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
    </div>  
    <div>
  <div>
    <label className="block text-sm text-gray-500 dark:text-gray-300">Difficulté</label>
    <select
  className="block mt-2 w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
  value={selectedDifficulty}
  onChange={(e) => setSelectedDifficulty(e.target.value)}
>
  <option value="">Tous</option>
  <option value="Facile">Facile</option>
  <option value="Moyen">Moyen</option>
  <option value="Difficile">Difficile</option>
</select>

<select
  className="block mt-2 w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
  value={selectedReward}
  onChange={(e) => setSelectedReward(e.target.value)}
>
  <option value="">Tous</option>
  <option value="Lac">Lac</option>
  <option value="Montagne">Montagne</option>
  <option value="Cascade">Cascade</option>
</select>
  </div>
</div>

    <button className="relative top-60 left-0 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-lime-700 rounded-lg hover:bg-lime-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 font-jomhuria ">
  En route !
</button>
    </div>
    
   <div className="absolute w-[400px] h-[400px] top-60 right-60">
   <Map selectedDifficulty={selectedDifficulty}
        selectedReward={selectedReward} />
   </div>
  </div>);

}


const center = {
    lat:46.8,
    lng: 8.2,
};


function Map({ selectedDifficulty, selectedReward }) {

    const [hikesData, setHikesData] = useState(null);
    const [selectedHike, setSelectedHike] = useState(null);
    const [map, setMap] = useState(null);
   
    const onMapLoad = (mapInstance) => {
        setMap(mapInstance);
      };

      const mapOptions = {
        mapId: "47196b1e2a5621df",
        disableDefaultUI: true,
        zoomControl: true,
      };

    useEffect(() => {
        async function fetchHikesData() {
          try {
            const response = await fetch('https://lucaslucas.fra1.digitaloceanspaces.com/hikes.json',
            );
            
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setHikesData(data.randonnees);
            for (let i = 0; i < data.randonnees.length; i++) {
                data.randonnees[i].id = i;
            }
          } 

          catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        
        fetchHikesData();
      }, []);

      useEffect(() => {
        if (map && selectedHike) {
          map.panTo({
            lat: selectedHike.latitude,
            lng: selectedHike.longitude,
          });
          map.setZoom(9); // You can adjust the zoom level as needed
        }
      }, [map, selectedHike]);


      const handleInfoWindowClose = () => {
        setSelectedHike(null);
        map.panTo(center);
        map.setZoom(7);
      };


      const filteredHikes = hikesData.filter((hike) => {
        if (selectedDifficulty && hike.difficulte !== selectedDifficulty) {
          return false;
        }
        if (selectedReward && hike.characteristique_geographie !== selectedReward) {
          return false;
        }
        return true;
      });
   
    return (<GoogleMap zoom={7} center={center} mapContainerClassName="map-container" options={mapOptions} onLoad={onMapLoad}>
        { filteredHikes && filteredHikes.map((hike) => (
            <MarkerF
            icon={'./location.svg'}
            label={(hike.id + 1).toString()}
            key={hike.id}
            position={{lat:hike.latitude, lng:hike.longitude}}
            onClick={() => setSelectedHike(hike)}
            >
                {selectedHike === hike && hikesData && <InfoWindowF
                onCloseClick={handleInfoWindowClose}
                position={{
                    lat: hike.latitude,
                    lng: hike.longitude
                }} >
                <div>
                    <p>{hike.nom}</p>
                    <p>{hike.description}</p>
                    <p>difficulte :{hike.difficulte}</p>
                    <p> characteristique geographie :{hike.characteristique_geographie}</p>
                    <p>{hike.enfant_friendly===true && <p>Enfant :  Vrai</p>}{hike.enfant_friendly===false && <p>Enfant :  faux</p>}</p>
                    <p>Denivelé : {hike.denivele}</p>
                    <button
             onClick={() => {
              const directionsURL = getDirectionsURL({ lat: hike.latitude, lng: hike.longitude });
              window.open(directionsURL, "_blank");
            }}
              className="relative px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-lime-700 rounded-lg hover:bg-lime-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 font-jomhuria"
            >
              En route !
            </button>
                </div>
               
                </InfoWindowF>}
            </MarkerF>
        ))}
    </GoogleMap>);
};

function getDirectionsURL(destination) {
  const destinationStr = `${destination.lat},${destination.lng}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${destinationStr}`;
}



