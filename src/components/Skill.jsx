import React from 'react'
import {CasualStyles} from "../styles/CasualTheme";
import {MarioStyles} from "../styles/MarioTheme";

export const Skill = (props) =>{

    let a,b
    let c = {}
    switch (props.lvl){
        case 5:
            a='five'
            b=CasualStyles.five
            break
        case 6:
            a='five'
            b=CasualStyles.six
            break
        case 7:
            a='seven'
            b=CasualStyles.seven
            break
        case 8:
            a='eight'
            b=CasualStyles.eight
            break
        default:
            a='five'
            b=CasualStyles.five
            break
    }
    if(props.MarioTheme){
        Object.assign(c,MarioStyles.done,b)
    }
    else Object.assign(c,CasualStyles.done,b)
    //Object.assign(c,MarioStyles.done,b)

    return <div className="skill" style={CasualStyles.skill}>
        <div className="skillName" style={CasualStyles.skillName}>
            {props.name}
        </div>
        <div className="lvl" style={props.MarioTheme? MarioStyles.lvl :CasualStyles.lvl}>
            <div className={"done "+a} style={c}></div>
        </div>
    </div>
}