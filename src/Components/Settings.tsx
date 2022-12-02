import React from 'react';
import {Link} from "react-router-dom";
import Slider from 'react-slider'
import settings from './settings.module.scss'

const Settings = () => {
    return (
        <div>
            <div style={{fontSize: 34, letterSpacing: 2, fontWeight: "bold"}}>Настройки</div>
            <div style={{marginBottom: 30}}>
                <label>Work Time:</label>
                <Slider min={1} max={120} value={60} className={settings.slider + ' ' + settings.orangeBorder} thumbClassName={`${settings.handle + ' ' + settings.orangeBack}`}  />
                <label>Break Time:</label>
                <Slider min={1} max={120} value={60} className={settings.slider + ' ' + settings.greenBorder} thumbClassName={`${settings.handle + ' ' + settings.greenBack}`}  />
            </div>

            <Link to={'/'} className={'settings__transition'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>


                <div>Таймер</div>
            </Link>
        </div>
    );
};

export default Settings;