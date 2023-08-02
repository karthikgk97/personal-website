import React, { useState } from 'react';
import axios from 'axios';

const TracerouteComponent = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [tracerouteHops, setTracerouteHops] = useState([]);

  const handleTraceRoute = () => {
    axios.get('https://api64.ipify.org?format=json&useIPv6=false')
      .then(response => {
        setIpAddress(response.data.ip);
        axios.post('http://localhost:5000/traceroute', { ip: response.data.ip })
          .then(response => {
            setTracerouteHops(response.data);
          })
          .catch(error => {
            console.error('Error fetching traceroute data:', error);
          });
      })
      .catch(error => {
        console.error('Error fetching IP address:', error);
      });
  };

  return (
    <div>
      <button onClick={handleTraceRoute}>Perform Traceroute</button>
      <p>User's IP address: {ipAddress}</p>
      <ul>
        {tracerouteHops.map((hop, index) => (
          <li key={index}>{hop}</li>
        ))}
      </ul>
    </div>
  );
};

export default TracerouteComponent;
