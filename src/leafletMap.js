import { Map, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import React from "react";
import { Icon } from "leaflet";
import "./index.css";

const LeafletMap = () => {
    return (
        //Conatainer for OpenStreetMap
        <MapContainer center={[45.4, -75.7]} zoom={12}>
            {/*Attribution to OSM*/}
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
        </MapContainer>
    );
}
 
export default LeafletMap;