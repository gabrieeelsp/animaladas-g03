import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {

    if (!mapRef.current) {
  
      mapRef.current = L.map('map', {
        center: [-24.900655205900904, -65.49464355698893], // Coordenadas de Cerrillos, Salta
        zoom: 15
      });

      const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);


      const marker = L.marker([-24.900655205900904, -65.49464355698893]).addTo(mapRef.current);

      marker.bindPopup("<b>¿Cómo llegar?</b>").on('click', openGoogleMaps);
    }
  }, []);

  const openGoogleMaps = () => {
    const lat = -24.900655205900904;
    const lng = -65.49464355698893;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, '_blank');
  };

  return (
    <div id="map" style={{ width: '100%', height: '400px', borderRadius: "20px", zIndex: 0 }}></div>
  );
};

export default Map;
