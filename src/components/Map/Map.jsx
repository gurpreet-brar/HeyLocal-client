import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import "./Map.scss";

function Map() {
  const google_api_key = import.meta.env.VITE_MAPS_API_KEY;
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: google_api_key,
  });

  if (loadError) {
    return <div>Error loading Maps</div>;
  }
  if (!isLoaded) {
    return <div>Loading</div>;
  }
  return (
    <section className="map">
      <GoogleMap
        zoom={10}
        center={{ lat: 43.653225, lng: -79.383186 }}
        mapContainerStyle={{ width: "50%", height: "500px" }}
      />
    </section>
  );
}

export default Map;
