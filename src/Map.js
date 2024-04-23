
import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const Map = ({ profiles }) => {
  return (
    <LoadScript googleMapsApiKey="MAP_API_KEY">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={{ lat: 0, lng: 0 }}
        zoom={2}
      >
        {profiles.map(profile => (
          <Marker key={profile.id} position={profile.address} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
