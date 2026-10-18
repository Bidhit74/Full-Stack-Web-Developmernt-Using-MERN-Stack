const mapContainer = document.getElementById("map");

if (mapContainer) {
    const MAPBOX_TOKEN = mapContainer.dataset.mapboxToken;
    console.log(MAPBOX_TOKEN);
    if (!MAPBOX_TOKEN) {
        console.error("Mapbox token is missing.");
    } else {
        const map = new mapboxgl.Map({
            accessToken: MAPBOX_TOKEN,
            container: "map", // container ID
            center: [-71.06776, 42.35816], // starting position [lng, lat]. Note that lat must be set between -90 and 90
            zoom: 9, // starting zoom
        });
    }
}
