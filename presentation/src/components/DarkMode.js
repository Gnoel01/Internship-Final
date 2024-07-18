import React from "react";
import {ReactComponent as Sun} from "./Sun.svg"
import {ReactComponent as Moon} from "./Moon.svg"
import "./Darkmode.css";

export default function DarkMode () {
    const setDarkmode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark')
        localStorage.setitem("selectedTheme", "dark")
    }
    const setLightmode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
        localStorage.setitem("selectedTheme", "light")
    }

    const selected = localSorage.getItem("selectedTheme")

    if (selectedTheme === "dark"){
        setDarkMode();
    }
    const toggleTheme = (e) => {
        if (e.target.checked) setDarkmode();
        else setLightmode()
    }
    return(
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                defaultChecked={selectedTheme === "dark"}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun/>
                <Moon/>
            </label>
        </div>
    );

};