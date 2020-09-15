import React, { useRef, useEffect } from 'react';
import './Map.css';

const Map = props => {
  const mapRef = useRef();
  const { center, zoom } = props;

 
  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: center.location,
      zoom: zoom
    });
  
    new window.google.maps.Marker({ position: center.location, map: map });
  }, [center.location, zoom]);  

  return (
    <div
      ref={mapRef}
      className="map"
      style={props.style}
    ></div>
  );
};

export default Map;
