import React from "react";
import {Link} from "react-router-dom";
import {randomAbHash, randomFxHash} from "../tools";
import {sitePath} from "../vars";

export function ProjectThumbnail(
    {
        name,
        type= "fxhash",
        hash=null,
        about=null,
        img,
        generator,
        ratio=1
    }) {
    const backgroundImage = `url(${img.startsWith("http") ? img: sitePath + img})`
    const height = `calc(var(--base-size) * ${0.4/(ratio||1)})`;
    const width = `calc(var(--base-size) * 0.4 )`;
    const to = '/generator/'  + type +
            "/" + generator +
            "/" + (hash || makeHash(type))

    return <div>
        {/*<h2>{name}</h2>*/}
        <Link to={to}>
            <div
                className={"project-thumbnail"}
                style={{
                    backgroundImage,
                    height,
                    width
                }}
            >
                {/*<div className={"project-info"}>*/}
                {/*    <div className={"fs02"}>{name}</div>*/}
                {/*    {about&&<Link to={about}><div className={"fs015"}>About</div></Link>}*/}
                {/*</div>*/}
            </div>

        </Link>
    </div>
}

function makeHash(type){
    if (type === "artblocks")
        return randomAbHash()
    return randomFxHash()
}