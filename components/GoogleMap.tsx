'use client';

import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Coordonnées : 1 Place de la Fraternité, 89100 Paron
  const center = {
    lat: 48.191417542254044,
    lng: 3.261094095968313
  };

  const mapStyles = {
    height: '100%',
    width: '100%',
    borderRadius: '0.5rem'
  };

  const containerStyle = {
    width: '100%',
    height: '256px'
  };

  if (!isClient) {
    return (
      <div className="card bg-gray-100 h-64 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500">Chargement de la carte...</p>
        </div>
      </div>
    );
  }

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="card bg-gray-100 h-64 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500">Carte non disponible</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card overflow-hidden p-0">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          options={{
            styles: mapStyles as any,
            disableDefaultUI: false,
            zoomControl: true,
          }}
        >
          <Marker
            position={center}
            title="Fab Lab La Multiprise"
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;
