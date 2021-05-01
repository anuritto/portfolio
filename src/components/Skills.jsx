import React from 'react'
import {Skill} from "./Skill";
import {CasualStyles} from "../styles/CasualTheme";

export const Skills = (props) => {

    const myLvls = [
        {
           name: 'HTML5',
           lvl: 6
        },
        {
           name: 'CSS3',
           lvl: 6
        },
        {
           name: 'JS',
           lvl: 6
        },
        {
           name: 'ReactJS',
           lvl: 6
        },
        {
           name: 'Redux',
           lvl: 6
        },
        {
           name: 'NodeJS',
           lvl: 6
        },
        {
           name: 'Express',
           lvl: 6
        },
        {
           name: 'GIT',
           lvl: 6
        }

    ]
    let skillsItem = {}
    Object.assign(skillsItem,CasualStyles.skills,CasualStyles.item)
    return <>
        <div className="skills item" style={skillsItem}>
            <h2 style={CasualStyles.h2}>My work skills:</h2>
            {
                myLvls.map(item => {
                    return <Skill MarioTheme={props.MarioTheme} name={item.name} lvl={item.lvl}/>
                })
            }

        </div>
    </>
}
