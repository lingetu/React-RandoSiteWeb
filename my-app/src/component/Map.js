import React from "react";

import { GoogleMap, useLoadScript, MarkerF, InfoWindow } from "@react-google-maps/api";


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
//Tableau de marker pour les balades, marker contient les coordonées, une description, et un niveeau de difficulté
const markers = [
    {
        id:0,
        nom: "Lac de Neuchâtel",
        lat: 46.8,
        lng: 8.2,
        description: "Balade au bord du lac",
        difficulty: "Facile",
        img:"/",
    },
    {
        id:1,
        nom: "Lac de Neuchâtel",
        lat: 46.8,
        lng: 8.2,
        description: "Balade au bord du lac",
        difficulty: "Facile",
        img:"/",
    } ,
    {
        id:2,
        nom: "Lac de Neuchâtel",
        lat: 46.8,
        lng: 8.2,
        description: "Balade au bord du lac",
        difficulty: "Facile",
        img:"/",
    }
   

]
 
// const icons = {
//     waterfall: {
//       icon: "https://www.flaticon.com/free-icons/waterfall",
//     },
//     lake: {
//       icon: "https://www.flaticon.com/free-icon/lake_2046214?term=lake&page=1&position=2&origin=tag&related_id=2046214",
//     },
//     view: {
//       icon:  "https://www.flaticon.com/free-icons/telescope",
//     },
// };


    

function Map() {
    
    // state = {
    //     mapMarker: null,
    //     showingInfoWindow: false
    //   };
    
    //   onMarkerClick = (props) => {
    //     this.setState({
    //       showingInfoWindow: true
    //     });
    //   };
    
    //   onInfoWindowClose = () =>
    //     this.setState({
    //       showingInfoWindow: false
    //     });
       
    
      
      
    
   
    
    return <GoogleMap zoom={7} center={center} mapContainerClassName="map-container" options={
        {
            mapId: '47196b1e2a5621df',
            disableDefaultUI: true,
            zoomControl: true,

        }
    }
    >
        <MarkerF icon={'./location.svg'}  
        label={(markers[0].id + 1).toString()} 
        key={markers[0].id} 
        position={{lat:markers[0].lat, lng:markers[0].lng}}  
        // onClick={onMarkerClick()}
        options={
            {
                label: {
                    text: (markers[0].id + 1).toString(),
                    color: "white",
                    fontSize: "8px",
                    fontWeight: "bold",
                },   
            }
        }
        >
            
           
          <InfoWindow
            position={{
              lat: markers[0].lat,
              lng: markers[0].lng
            }}
            // onCloseClick={this.onInfoWindowClose}
          >
            <div>
              <p>hello</p>
            </div>
          </InfoWindow>
        
        </MarkerF>
       
    </GoogleMap>
};

// function fillForm(markers)
// {
  
    

// }