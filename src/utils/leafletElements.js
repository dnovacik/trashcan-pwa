import L, { TileLayer } from 'leaflet';
import currentUserLocation from '@/assets/currentlocation.png';

export const currentUserLocationIcon = new L.Icon({
    iconUrl: currentUserLocation,
    iconSize: [24, 24], // size of the icon
    // iconAnchor: [20, 51], // point of the icon which will correspond to marker's location
    // popupAnchor: [0, -51] // point from which the popup should open relative to the iconAnchor                                 
});

export const mapLayers = [
    new TileLayer(
        "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png",
        {
            attribution:
                "&copy; <a href=&quot;http://cartodb.com/attributions&quot;>CartoDB</a>",
            maxZoom: 20
        }
    )
];

export const defaultMapPositionSettings = {
    center: [48, 19],
    zoom: 6
};
