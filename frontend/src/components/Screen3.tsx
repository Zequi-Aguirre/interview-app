import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Screen3 = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api/screen3')
      .then(response => setMessage(response.data.message));
  }, []);

  return <div>{message}</div>;
};

export default Screen3;
