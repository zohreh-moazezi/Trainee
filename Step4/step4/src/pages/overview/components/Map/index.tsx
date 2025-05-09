import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import { BikersMapProps } from '@api/map/fetchMarkers.types';
import icon from '@assets/biker.png';

const bikerIcon = L.icon({
  iconUrl: icon,
  iconSize: [20, 20],
});

const BikerMap: React.FC<BikersMapProps> = ({ data }) => {
  return (
    <MapContainer
      center={[35.702502, 51.389623]}
      zoom={10}
      scrollWheelZoom={false}
      style={{ width: '100%', height: '33.68rem' }}
    >
      <TileLayer
        attribution='<a href="https://snappfood.ir"></a> '
        url="https://raster.snappmaps.ir/styles/snapp-style/{z}/{x}/{y}.png"
      />
      {data?.map((marker, index) => (
        <Marker
          key={index}
          position={[marker.lat, marker.long]}
          icon={bikerIcon}
        ></Marker>
      ))}
    </MapContainer>
  );
};

export default BikerMap;
