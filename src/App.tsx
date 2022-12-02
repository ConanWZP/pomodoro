import React from 'react';
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Timer from "./Components/Timer";
import Settings from "./Components/Settings";

const App = () => {
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path={''} element={<Timer/>} />
                    <Route path={'/settings'} element={<Settings/>} />
                </Routes>

            </main>
        </BrowserRouter>

    );
};

export default App;