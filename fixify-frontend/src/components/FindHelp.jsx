import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CiLocationOn } from "react-icons/ci";
import './FindHelp.css'


const FindHelp = () => {
  const [location, setLocation] = useState('');
  const [serviceType, setServiceType] = useState('');
  const navigate = useNavigate();

  const handleServiceTypeChange = (e) => {
    setServiceType(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle the form submission
    // For example, you can send a request to your backend
    // to find help based on the user's location
    history.push('/help-results'); // Redirect to the help results page
  };

  return (
    <div className='fh-container'>
      <div className='fh-header'>
      <h1 className='fh-text'>Find Help</h1>
      <div className="fh-underline"></div>
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
          <button className='fh-submit'>Locate Help</button>
        </div>
      </form>
    </div>
  );
};

export default FindHelp;
