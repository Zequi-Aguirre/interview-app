import { useState, useEffect } from 'react';
import axios from 'axios';

const Screen1 = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('Screen1 mounted');
    axios.get('http://localhost:8000/api/screen1')
      .then(response => setMessage(response.data.message));
  }, []);

  return <div>{message}</div>;
};

export default Screen1;
