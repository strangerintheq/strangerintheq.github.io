import React, {useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import {randomAbHash, randomFxHash} from "../tools";
import {sitePath} from "../vars";

export function ProjectItem({
    name,
    type,
    hash = null,
    img,
    c = null,
    r = null,
    id = null,
}) {

    const to = '/generator/' + type +
        "/" + name.toLowerCase().replaceAll(" ", "-") +
        "/" + (hash || makeHash(type))

    return <div style={{gridColumn: c, gridRow: r}}>
        <Link to={to}>
            <DivWithBackgroundImage img={img} />
        </Link>
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

function makeHash(type) {
    if (type === "artblocks")
        return randomAbHash()
    return randomFxHash()
}