import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker, MarkerClusterer } from "@react-google-maps/api";

interface Location {
  id: string;
  lat: number;
  lng: number;
  name: string;
  screenCount: number;
}

interface InteractiveMapProps {
  apiKey: string;
  locations: Location[];
}

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 51.5074,
  lng: 10.4515,
};

const InteractiveMap = ({ apiKey, locations }: InteractiveMapProps) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = (map: google.maps.Map) => {
    setMap(map);
  };

  const clusterOptions = {
    imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    gridSize: 60,
    minimumClusterSize: 2,
    styles: [
      {
        textColor: "white",
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='30' cy='30' r='28' fill='%233b82f6' opacity='0.8'/%3E%3C/svg%3E",
        height: 60,
        width: 60,
      },
    ],
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={5}
        onLoad={onLoad}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: true,
          zoomControl: true,
        }}
      >
        <MarkerClusterer options={clusterOptions}>
          {(clusterer) => (
            <>
              {locations.map((location) => (
                <Marker
                  key={location.id}
                  position={{ lat: location.lat, lng: location.lng }}
                  clusterer={clusterer}
                  title={`${location.name} - ${location.screenCount} screens`}
                  onClick={() => {
                    console.log("Clicked:", location.name);
                  }}
                />
              ))}
            </>
          )}
        </MarkerClusterer>
      </GoogleMap>
      
    </LoadScript>
  );
};

export default InteractiveMap;
