import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Screen2 = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api/screen2')
      .then(response => setMessage(response.data.message));
  }, []);

  return <div>{message}</div>;
};

export default Screen2;
