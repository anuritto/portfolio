import React from 'react'
import {CasualStyles} from "../styles/CasualTheme";
import {MarioStyles} from "../styles/MarioTheme";

export const Links = (props) =>{
    let linksItem = {}
    Object.assign(linksItem,CasualStyles.links,CasualStyles.item)

    return <div className="links item" style={linksItem}>
        <h2 style={CasualStyles.h2}>My some projects:</h2>
        <ul style={{color:'inherit'}}>
            <li style={{color:'inherit'}}><a style={props.MarioTheme ? MarioStyles.linksA: CasualStyles.linksA}  href="https://anuritto.github.io/social-network/" target="_blank">Social Network (ReactJS)</a></li>
            <li style={{color:'inherit'}}><a style={props.MarioTheme ? MarioStyles.linksA: CasualStyles.linksA}  href="https://github.com/anuritto/links_app" target="_blank">Short links (MERN)</a></li>
        </ul>
        <br/>
            <h3 style={CasualStyles.h3}>Links:</h3>
            <ul style={{color:'inherit'}}>
                <li style={{color:'inherit'}}>My github: <a style={props.MarioTheme ? MarioStyles.linksA: CasualStyles.linksA} href="https://github.com/anuritto" target="_blank">/anuritto</a></li>
                <li style={{color:'inherit'}}>My telegram: <a style={props.MarioTheme ? MarioStyles.linksA: CasualStyles.linksA} target="_blank" href="https://t.me/anuritto">@anuritto</a></li>
            </ul>
    </div>

}