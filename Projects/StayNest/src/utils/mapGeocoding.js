import dotenv from "dotenv";
import mapGeocoding from "@mapbox/mapbox-sdk/services/geocoding-v6.js";
dotenv.config();
const mapGeoCoding = async (location) => {
    const MAPBOX_TOKEN = process.env.MAPBOX_PUBLIC_TOKEN;
    // Mapbox Api for coordinates
    const geocodingClient = mapGeocoding({ accessToken: MAPBOX_TOKEN });
    const response = await geocodingClient
        .forwardGeocode({
            query: location,
            limit: 1,
            countries: ["IN"],
        })
        .send();
    const { geometry } = response.body.features[0];
    return geometry;
};

export default mapGeoCoding;
