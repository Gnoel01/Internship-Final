import React from "react";
import Sun from "./Sun.png"
import Moon from "./Moon.png"
import "./DarkMode.css";

export default function DarkMode () {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark')
        localStorage.setItem("selectedTheme", "dark")
    }
    const setLightmode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
        localStorage.setItem("selectedTheme", "light")
    }

    const selectedTheme = localStorage.getItem("selectedTheme")

    if (selectedTheme === "dark"){
        setDarkMode();
    }
    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
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
                {/* <Sun/> */}
                <img src={Sun} className="App-Sun" alt="Sun"/>
                {/* <Moon/> */}
                <img src={Moon} className="App-Moon" alt="Moon"/>
            </label>
        </div>
    );

};