# Location with Mapbox

- Mapbox: Provides a public access token to display maps. Never expose a secret token.

- Mapbox GL JS: Client-side JavaScript library for displaying interactive maps in web applications.

- Integration: Add Mapbox CSS and JS scripts to the listing show page. Store custom CSS/JS in the `public` folder.

- Purpose: Display the listing's location on the map.

## Geocoding

Geocoding converts between addresses and geographic coordinates.

- Forward Geocoding: Address → Longitude and Latitude.

- Reverse Geocoding: Longitude and Latitude → Address.

Use the Mapbox Geocoding API to obtain coordinates from a listing's address.

### Mapbox SDK

Install the JavaScript SDK:

Bash

```js
npm install @mapbox/mapbox-sdk
```

- Used to access Mapbox APIs from JavaScript.

- For StayNest, use it in the Node.js backend to geocode listing locations.

## Storing Coordinates in MongoDB

- Store coordinates using GeoJSON format.

- GeoJSON represents geographic data such as points, lines and polygons.

- For a listing location, use a GeoJSON `Point`:

JavaScript

```js
geometry: {
    type: "Point",
    coordinates: [longitude, latitude],
}
```

Important: GeoJSON coordinate order is `[longitude, latitude]`, not `[latitude, longitude]`.

## Map Marker

A marker identifies a listing's location on the map.

JavaScript

```js
const marker = new mapboxgl.Marker({
    color: "#F97316",
})
    .setLngLat([longitude, latitude])
    .addTo(map);
```

## Marker Popup

A popup displays information when the user interacts with a marker.

JavaScript

```js
const popup = new mapboxgl.Popup({
    offset: 25,
}).setHTML("<h3>StayNest Property</h3>");

const marker = new mapboxgl.Marker({
    color: "#F97316",
})
    .setLngLat([longitude, latitude])
    .setPopup(popup)
    .addTo(map);
```

By default, clicking the marker opens the popup.
