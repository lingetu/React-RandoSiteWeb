
import {useState, useEffect} from "react";

import { GoogleMap, useLoadScript, MarkerF, InfoWindowF} from "@react-google-maps/api";


export default function MapJS()  {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAl4sfVJd64D6DhkMYdKh2h4s1dTyX4aaY",
    });

    if (!isLoaded) return <div>"Loading..."</div>;
    return <Map />;

}


const center = {
    lat:46.8,
    lng: 8.2,
};


function Map() {

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
   
    return <GoogleMap zoom={7} center={center} mapContainerClassName="map-container" options={mapOptions} onLoad={onMapLoad}>
        { hikesData && hikesData.map((hike) => (
            <MarkerF
            icon={'./location.svg'}
            label={(hike.id + 1).toString()}
            key={hike.id}
            position={{lat:hike.latitude, lng:hike.longitude}}
            onClick={() => setSelectedHike(hike)}
            // options={
            //     {
            //         label: {
            //             text: (hike.id + 1).toString(),
            //             color: "white",
            //             fontSize: "8px",
            //             fontWeight: "bold",
            //         },
            //     }
            // }
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
                </div>
                </InfoWindowF>}
            </MarkerF>
        ))}
    </GoogleMap>
};

