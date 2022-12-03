import React, {useContext, useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ButtonPlay from "./ButtonPlay";
import ButtonPause from "./ButtonPause";
import SettingsContext from "../store/SettingsContext";
import audioDin from './../assets/audio/dindon.mp3'



const Timer = () => {
    /*pathColor: '#ef6c13'*/
    /*pathColor: '#98ee16'*/
    const audioElement = useRef<HTMLAudioElement>(null)
    const settingsTime = useContext(SettingsContext)

    const [isPlaying, setIsPlaying] = useState(false)
    const [secondsLeft, setSecondsLeft] = useState(0)
    const [mode, setMode] = useState('work') // or break

    const secondsLeftRef = useRef(secondsLeft)
    const isPlayingRef = useRef(isPlaying)
    const modeRef = useRef(mode)


    const initialiseTimer = () => {
        secondsLeftRef.current = settingsTime.workTime * 60
        setSecondsLeft(secondsLeftRef.current)
    }


    const tick = () => {
        secondsLeftRef.current--;
        setSecondsLeft(secondsLeftRef.current)
    }


    const changeMode = () => {
        let newMode = modeRef.current === 'work' ? 'break' : 'work'

        setMode(newMode)
        modeRef.current = newMode

        secondsLeftRef.current = newMode === 'break' ? settingsTime.breakTime*60 : settingsTime.workTime*60
        setSecondsLeft(secondsLeftRef.current)

    }


    useEffect(() => {

        initialiseTimer()

        const currentInterval = setInterval(() => {
            if (!isPlayingRef.current) {
                return
            }
            if (secondsLeftRef.current === 0) {
                changeMode()
               // setInterval(() => {
                    audioElement.current?.play()
              //  }, 1)
            }
            tick()

        }, 1000)

        return () => clearInterval(currentInterval)

    }, [settingsTime])



    let totalTime = mode === 'work' ? settingsTime.workTime*60 : settingsTime.breakTime*60
    let percentTime = Math.round(secondsLeft / totalTime * 100)


    let minutes = Math.floor(secondsLeft / 60)
    let seconds = secondsLeft % 60 as any
    if (seconds < 10) {
        seconds = '0' + seconds
    }


    return (
        <div>
            <div style={{fontSize: 34, letterSpacing: 2, fontWeight: "bold", marginBottom: 20}}>Таймер</div>
            <CircularProgressbar value={percentTime} text={`${minutes + ':' + seconds}`} styles={buildStyles({
                textColor: 'white',
                trailColor: 'black',
                pathColor: `${mode === 'work' ? '#ef6c13' : '#98ee16' }`
            })} />
            <div className={'button__play-pause'} onClick={() => {setIsPlaying(!isPlaying); isPlayingRef.current = !isPlaying}}>
                {
                    isPlaying ?
                        <div onClick={() => audioElement.current?.load()}>
                            <ButtonPause />
                        </div>

                        :
                        <ButtonPlay />
                }
            </div>

            <Link to={'/settings'} className={'settings__transition'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"/>
                </svg>

                <div>Настройки</div>
            </Link>
            <audio id='beep' ref={audioElement}>
                <source src={audioDin}/>
            </audio>
        </div>
    );
};

export default Timer;