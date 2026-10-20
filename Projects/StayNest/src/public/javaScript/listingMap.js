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
            style: "mapbox://styles/mapbox/standard",
            zoom: 8, // starting zoom
        });
        map.on("style.load", () => {
            map.setConfigProperty("basemap", "lightPreset", "dusk");
        });
        // Create a default Marker and add it to the map.

        const coordinates = [longitude, latitude];

        const popup = new mapboxgl.Popup({
            offset: 25,
            closeButton: false,
            closeOnClick: false,
        }).setHTML(`
    <div class="rounded-xl bg-white p-4 shadow-xl">
        <p class="text-xs font-bold uppercase tracking-widest text-orange-500">
            StayNest
        </p>
        <h3 class="mt-2 text-lg font-bold text-slate-900">
            Property Location
        </h3>
        <p class="mt-1 text-sm text-slate-600">
            Exact Location provided after booking
        </p>
    </div>
`);

        const marker = new mapboxgl.Marker({
            color: "#F97316",
        })
            .setLngLat(coordinates)
            .addTo(map);

        // Show popup on hover
        marker.getElement().addEventListener("mouseenter", () => {
            popup.setLngLat(coordinates).addTo(map);
        });

        // Hide popup when the pointer leaves the marker
        marker.getElement().addEventListener("mouseleave", () => {
            popup.remove();
        });
    }
}
