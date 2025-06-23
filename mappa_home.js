/**
 * This file is the main map script. The contents of this script gets executed sequentially
 * when it is imported.
 */

//Step 1: Add the OSM base map and the map object to the WebGIS
//Put here the OSM layer. 
let osm = new ol.layer.Tile({
    visible: true,
    source: new ol.source.OSM()
});

//Put here the main map object.
 const initialView = {
            center: ol.proj.fromLonLat([17.6791, 43.9159]),
            zoom: 7
        };

//Step 2: The BOSNIA BOUNDARIES layer definition. This is a WMS layer
const bosniaBoundaryLayer = new ol.layer.Image({
            source: new ol.source.ImageWMS({
                url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_18/wms',
                params: { 'LAYERS': 'gisgeoserver_18:BOSNIA_BOUNDARIES', 'TILED': true },
                ratio: 1,
                serverType: 'geoserver'
            }),
            visible: true
        });
map.addLayer(bosniaBoundaryLayer);
