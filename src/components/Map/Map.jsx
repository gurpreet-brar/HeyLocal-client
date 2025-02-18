import { GoogleMap, useLoadScript } from "@react-google-maps/api";

import "./Map.scss";

function Map() {
  const google_api_key = import.meta.env.VITE_MAPS_API_KEY;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: google_api_key,
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <section className="map">
      <GoogleMap
        defaultZoom={7}
        defaultCenter={{ lat: 43.653225, lng: -79.383186 }}
        mapContainerStyle={{ width: "100%", height: "43.75rem" }}
      />
    </section>
  );
}

export default Map;
