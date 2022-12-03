import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import Slider from 'react-slider'
import settings from './settings.module.scss'
import SettingsContext from "../store/SettingsContext";

const Settings = () => {

    const settingsTime = useContext(SettingsContext)


    return (
        <div>
            <div style={{fontSize: 34, letterSpacing: 2, fontWeight: "bold"}}>Настройки</div>
            <div style={{marginBottom: 30}}>
                <label>Work Time: {settingsTime.workTime}:00</label>
                <Slider min={1} max={120}
                        value={settingsTime.workTime}
                        className={settings.slider + ' ' + settings.orangeBorder}
                        thumbClassName={`${settings.handle + ' ' + settings.orangeBack}`}
                        onChange={(val: number) => settingsTime.setWorkTime(val)} />
                <label>Break Time: {settingsTime.breakTime}:00</label>
                <Slider min={1} max={120} value={settingsTime.breakTime}
                        className={settings.slider + ' ' + settings.greenBorder}
                        thumbClassName={`${settings.handle + ' ' + settings.greenBack}`}
                        onChange={(val: number) => settingsTime.setBreakTime(val)}  />
            </div>

            <Link to={'/'} className={'settings__transition'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>


                <div>Таймер</div>
            </Link>
        </div>
    );
};

export default Settings;