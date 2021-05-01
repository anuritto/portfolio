import React from 'react'
import {CasualStyles} from "../styles/CasualTheme";
import avatar from '../styles/img/avatar.png'

export const Bio = () =>{
    let bioItem = {}
    Object.assign(bioItem,CasualStyles.bio,CasualStyles.item)
    return <>
        <div className="bio item" style={bioItem}>
            <div className="header" style={CasualStyles.header}>
                <div className="avatar" style={CasualStyles.avatar}>
                    <img src={avatar} alt="" style={CasualStyles.avatarImg}/>
                </div>
                <div className="name" style={CasualStyles.name}>
                    <h1 style={CasualStyles.h1}>Усманов А.</h1>
                    <h3 style={CasualStyles.h3}>Web Developer</h3>
                </div>
            </div>
            <div style={{color: "inherit"}}>
                <p style={CasualStyles.p}>Привет, меня зовут Анур, мне 22 года. В школе увлекался робото&shy;техникой и програм&shy;мированием микро&shy;контроллеров. Я закончил радиотехнический факультет Самарского университета, где <span style={{color:'inherit'}} title="именно ознакомился)">ознакомился </span>с такими языками как Ассемблер и C++. </p>
                <p style={CasualStyles.p}>После университета увлекся веб-разработкой, в чём и вижу свою дальнейшую жизнь.</p>
            </div>
        </div>
    </>
}

