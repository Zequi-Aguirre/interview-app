import { useState, useEffect } from 'react';
import axios from 'axios';

const Screen3 = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('Screen3 mounted');
    axios.get('http://localhost:8000/api/screen3')
      .then(response => setMessage(response.data.message));
  }, []);

  return <div>{message}</div>;
};

export default Screen3;
