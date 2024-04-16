import React, { useState, useEffect } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import './FindHelp.css';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const FindHelp = () => {
  const [location, setLocation] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [mapVisible, setMapVisible] = useState(false); // State to track map visibility
  const [map, setMap] = useState(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'YOUR_API_KEY'
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (navigator.geolocation && map) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        map.panTo(userLocation);
      });
    }
  }, [map]);

  const handleServiceTypeChange = (e) => {
    setServiceType(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleLocateHelp = () => {
    setMapVisible(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    handleLocateHelp(); // Trigger map visibility after form submission
    // navigate('/help-results'); // Redirect to the help results page
  };

  return (
    <div className='fh-container padding-adjustment'>
      <div className='fh-header'>
        <h1 className='fh-text text-blue-900'>Find Help</h1>
        <div className="underline mb-20"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <label className='location-input'>
          <CiLocationOn className='icon'/>
          <input type="text" required placeholder='Please Input Your Location' value={location} onChange={handleLocationChange} />
        </label>
        <label className='service-input'>
          <p>Service Type:</p>
          <select value={serviceType} onChange={handleServiceTypeChange}>
            <option>Select</option>
            <option value="tow-truck">Tow Truck</option>
            <option value="mechanic">Mechanic</option>
            <option value="tyre-fix">Tyre Fix</option>
            <option value="tyre-fix">Battery Jumpstart</option>
            <option value="other">Other</option>
          </select>
        </label>
        <div className="fh-submit-container">
          <button type="button" className='fh-submit bg-blue-900' onClick={handleLocateHelp}>Locate Help</button>
        </div>
      </form>
      {mapVisible && isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={(map) => setMap(map)}
        >
          <Marker position={center} />
        </GoogleMap>
      )}
    </div>
  );
};

export default FindHelp;
