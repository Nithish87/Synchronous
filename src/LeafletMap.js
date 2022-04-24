import { Map, MapContainer, Marker, Popup, TileLayer, useLeaflet } from "react-leaflet";
import React, {useState} from "react";
import { Icon } from "leaflet";
import "./index.css";
import Search from "./Search";




const LeafletMap = ({latitude,longitude}) => {

    // const [latitude,setLatitude]=useState("");
    // const [longitude,setLongitude]=useState("");

    // const handleChange=(lat,lon)=>{
    //     setLatitude(lat);
    //     setLongitude(lon);
    //     // console.log(latitude);
    // }
    console.log("In LeafletMap");
    console.log(latitude,longitude);
    
    return (
        
        //Conatainer for OpenStreetMap
        <MapContainer center={[latitude,longitude]} zoom={50}>
            {/*Attribution to OSM*/}
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
        </MapContainer>
    );
}
 
export default LeafletMap;