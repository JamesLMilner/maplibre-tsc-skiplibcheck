import maplibregl from 'maplibre-gl'

const map = new maplibregl.Map({
    container: 'map',
    style: 'https://maps.geoapify.com/v1/styles/osm-carto/style.json',
    center: [0, 0],
    zoom: 2,
})

console.log(map)