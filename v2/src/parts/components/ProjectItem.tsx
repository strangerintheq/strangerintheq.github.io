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
        w = 1,
        h = 1,
        c=null,
        r=null,
        id=null
    }) {
    const backgroundImage = `url(${img.startsWith("http") ? img: sitePath + img})`
    const height = `calc(var(--base-size) * ${0.74*h})`;
    const width = `calc(var(--base-size) * ${0.74*w} )`;
    const to = '/generator/'  + type +
            "/" + generator +
            "/" + (hash || makeHash(type))
    const gridColumn = c
    const gridRow = r
    return <div style={{ gridColumn,gridRow, lineHeight:0}}>
        <Link to={to}>
            <div
                className={"project-thumbnail"}
                style={{backgroundImage, height, width}}
            />
        </Link>
    </div>
}

function makeHash(type){
    if (type === "artblocks")
        return randomAbHash()
    return randomFxHash()
}