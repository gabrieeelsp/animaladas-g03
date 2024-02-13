import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {

    if (!mapRef.current) {
  
      mapRef.current = L.map('map', {
        center: [-24.900655205900904, -65.49464355698893], // Coordenadas de Cerrillos, Salta
        zoom: 13
      });

      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);


      L.marker([-24.900655205900904, -65.49464355698893]).addTo(mapRef.current);
    }
  }, []);

  return (
    <div id="map" style={{ width: '100%', height: '400px' }}></div>
  );
};

export default Map;
