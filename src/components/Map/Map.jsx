import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./Map.scss";

const libraries = ["places"];

function Map({
  address,
  setAddress,
  coordinates,
  setCoordinates,
  isEditable = false,
}) {
  const google_api_key = import.meta.env.VITE_MAPS_API_KEY;
  const autoCompleteRef = useRef(null);
  const [userAddress, setUserAddress] = useState(null);
  const defaultCenter = { lat: 43.653225, lng: -79.383186 };

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: google_api_key,
    libraries,
  });

  const autoComplete = () => {
    const location = document.getElementById("location");
    if (!location) {
      return;
    }
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      location
    );
    autoCompleteRef.current.addListener("place_changed", () => {
      const loc = autoCompleteRef.current.getPlace();
      const lat = loc.geometry.location.lat();
      const lng = loc.geometry.location.lng();
      setCoordinates({ lat, lng });
      setAddress(loc.formatted_address);
    });
  };

  useEffect(() => {
    if (!isEditable && address) {
      getCoordinates(address);
    }
  }, [isEditable, address]);

  useEffect(() => {
    if (!isLoaded || autoCompleteRef.current) {
      return;
    }
    autoComplete();
  }, [isLoaded]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setUserAddress({ lat, lng });
      });
    }
  }, []);

  const getCoordinates = async (address) => {
    const base_url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${google_api_key}`;
    const response = await axios.get(base_url);
    console.log(response.data);
  };

  const openDirections = () => {
    if (!userAddress) {
      return;
    }
    const direction = `https://www.google.com/maps/dir/?api=1&origin=${userAddress.lat},${userAddress.lng}&destination=${coordinates.lat},${coordinates.lng}`;
    window.open(direction, "_blank");
  };

  if (loadError) {
    return <div>Error loading Maps</div>;
  }
  if (!isLoaded) {
    return <div>Loading</div>;
  }

  return (
    <section className="map">
      <GoogleMap
        zoom={coordinates ? 14 : 10}
        center={coordinates || defaultCenter}
        mapContainerStyle={{ width: "100%", height: "500px" }}
      >
        {coordinates && (
          <Marker
            position={coordinates}
            onClick={openDirections}
            title="Click to get directions"
          />
        )}
      </GoogleMap>
    </section>
  );
}

export default Map;
