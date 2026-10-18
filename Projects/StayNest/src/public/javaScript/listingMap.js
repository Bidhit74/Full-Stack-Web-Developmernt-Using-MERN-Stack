const mapContainer = document.getElementById("map");

if (mapContainer && !mapContainer.dataset.initialized) {
    mapContainer.dataset.initialized = "true";

    const MAPBOX_TOKEN = mapContainer.dataset.mapboxToken;
    // console.log(MAPBOX_TOKEN);
    const [longitude, latitude] = mapContainer.dataset.mapCoordinates
        .split(",")
        .map(Number);

    if (!MAPBOX_TOKEN) {
        console.error("Mapbox token is missing.");
    } else {
        const map = new mapboxgl.Map({
            accessToken: MAPBOX_TOKEN,
            container: "map", // container ID
            center: [longitude, latitude], // starting position [lng, lat]. Note that lat must be set between -90 and 90
            zoom: 11, // starting zoom
        });
    }
}
