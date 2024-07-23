import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";
import Screen3 from "./components/Screen3";

const App = () => {
    console.log('App mounted');
    return (
        <Router>
            <div className="flex">
                <nav className="w-1/4 h-screen bg-gray-200">
                    <ul>
                        <li><Link to="/screen1">Screen 1</Link></li>
                        <li><Link to="/screen2">Screen 2</Link></li>
                        <li><Link to="/screen3">Screen 3</Link></li>
                    </ul>
                </nav>
                <main className="w-3/4 p-4">
                    <Routes>
                        <Route path="/screen1" element={<Screen1/>}/>
                        <Route path="/screen2" element={<Screen2/>}/>
                        <Route path="/screen3" element={<Screen3/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
