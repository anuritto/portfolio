
import React, {useState} from 'react'
import {Bio} from "./Bio";
import {Skills} from "./Skills";
import {Links} from "./Links";
import {CasualStyles} from "../styles/CasualTheme";
import {MarioStyles} from "../styles/MarioTheme";
import gumba from './../styles/img/gumba.png'
export const MainPage = () =>{
    const [marioTheme,setMarioTheme] = useState(false)
    const switchTheme = (event)=>{
        event.preventDefault()
        setMarioTheme(!marioTheme)
    }
    return <>
        <div className="psevdobody" style={marioTheme?MarioStyles.psevdobody :CasualStyles.psevdobody}>

            <div className="container" style={CasualStyles.container}>
                <div className="wrapper" style={CasualStyles.wrapper}>
                    <Bio/>
                    <Skills MarioTheme={marioTheme}/>
                    <Links MarioTheme={marioTheme}/>
                </div>
            </div>
            <div className="footer" style={CasualStyles.footer}>
                {}

                <a style={CasualStyles.footerA} onClick={switchTheme}>
                    {marioTheme?<>go casual theme</>
                    :
                        <>go mario theme<img style={CasualStyles.footerImg} src={gumba} alt=""/></> } </a>
            </div>
        </div>
    </>
}

