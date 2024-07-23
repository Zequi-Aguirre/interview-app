import {Link, Route, Routes} from "react-router-dom";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import React from "react";

const HomeScreen = () => {
    return (
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
                    <Route path="/screen1" element={<Screen1 />} />
                    <Route path="/screen2" element={<Screen2 />} />
                    <Route path="/screen3" element={<Screen3 />} />
                </Routes>
            </main>
        </div>
    );
};

export default HomeScreen;