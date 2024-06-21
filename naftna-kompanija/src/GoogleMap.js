import React, { useEffect } from 'react';

const GoogleMap = () => {
  useEffect(() => {
    const initMap = () => {
      const companyLocation = { lat: -34.397, lng: 150.644 };
      const map = new window.google.maps.Map(document.getElementById('googleMap'), {
        zoom: 8,
        center: companyLocation,
      });
      new window.google.maps.Marker({
        position: companyLocation,
        map: map,
      });
    };

    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
      document.head.append(script);
      script.addEventListener('load', initMap);
    } else {
      initMap();
    }
  }, []);

  return <div id="googleMap" style={{ width: '100%', height: '400px' }} />;
};

export default GoogleMap;
