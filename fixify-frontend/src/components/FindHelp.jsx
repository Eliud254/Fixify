import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FindHelp = () => {
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

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
    <div className='m-20'>
      <h1>Find Help</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Location:
          <input type="text" value={location} onChange={handleLocationChange} />
        </label>
        <button type="submit">Find Help</button>
      </form>
    </div>
  );
};

export default FindHelp;
