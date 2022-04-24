import { Map, MapContainer, Marker, Popup, TileLayer, useLeaflet } from "react-leaflet";
import React from "react";
import { Icon } from "leaflet";
import "./index.css";
import Search from "./Search";




const LeafletMap = () => {
    return (
        
        //Conatainer for OpenStreetMap
        <MapContainer center={[13.050787918269288, 74.96646406834802]} zoom={50}>
            {/*Attribution to OSM*/}
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
        </MapContainer>


    );
}
 
export default LeafletMap;