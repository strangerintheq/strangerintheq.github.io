import React from "react";
import {randomHash, sitePath} from "../tools";
import {NavLink} from "./NavLink";

export function ProjectItem(
    {
        name,
        type,
        img,
        hash = null,
        c = null,
        r = null,
        link = null
    }
) {

    const generator = name.toLowerCase().replaceAll(" ", "-");
    const to = 'type=' + type +
        "&generator" + generator +
        "&hash=" + (hash || randomHash(type))

    return <div style={{gridColumn: c, gridRow: r}}>
        <NavLink to={to}>
            <DivWithBackgroundImage img={img}/>
        </NavLink>
    </div>
}

function DivWithBackgroundImage({img}) {
    const backgroundImage = `url(${img.startsWith("http") ? img : sitePath + img})`
    return <div
        style={{
            backgroundImage,
            height: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            boxShadow: '0 0 3px 0 #9c9898'
        }}
    />
}

