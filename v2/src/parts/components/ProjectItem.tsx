import React from "react";
import {Link} from "react-router-dom";
import {sitePath} from "../Crutch";
import {randomAbHash, randomFxHash} from "../tools";

export function ProjectItem(
    {
        name,
        type= "fxhash",
        hash=null,
        about=null,
        img,
        generator,
        c=null,
        r=null,
        id=null,
    }) {
    const backgroundImage = `url(${img.startsWith("http") ? img: sitePath + img})`
    const to = '/generator/'  + type +
            "/" + generator +
            "/" + (hash || makeHash(type))
    const gridColumn = c
    const gridRow = r
    return <div className={"mask"} style={{ gridColumn, gridRow, width:'100%', height:'100%'}}>
        {/*<Link to={to}>*/}
            <div
                className={"project-thumbnail"}
                style={{backgroundImage, width:'100%', height:'100%'}}
            />
        {/*</Link>*/}
    </div>
}

function makeHash(type){
    if (type === "artblocks")
        return randomAbHash()
    return randomFxHash()
}