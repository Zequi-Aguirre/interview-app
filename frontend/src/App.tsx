import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';

const App = () => {
  console.log('App mounted');
  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomeScreen />} />
        </Routes>
    </Router>
  );
};

export default App;
