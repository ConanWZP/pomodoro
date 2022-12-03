import React, {useState} from 'react';
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Timer from "./Components/Timer";
import Settings from "./Components/Settings";
import SettingsContext from './store/SettingsContext';

const App = () => {

    const [workTime, setWorkTime] = useState(50)
    const [breakTime, setBreakTime] = useState(5)

    return (
        <BrowserRouter>
            <main>
                <SettingsContext.Provider value={{
                    workTime,
                    breakTime,
                    setWorkTime,
                    setBreakTime
                }}>
                    <Routes>
                        <Route path={''} element={<Timer/>} />
                        <Route path={'/settings'} element={<Settings/>} />
                    </Routes>
                </SettingsContext.Provider>
            </main>
        </BrowserRouter>

    );
};

export default App;