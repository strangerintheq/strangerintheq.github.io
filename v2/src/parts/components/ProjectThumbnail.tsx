import React from "react";
import {Link} from "react-router-dom";
import {sitePath} from "../Crutch";
import {randomAbHash, randomFxHash} from "../tools";

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
    const height = `calc(var(--base-size) * ${0.25/(ratio||1)})`;
    const to = '/generator/'  + type +
            "/" + generator +
            "/" + (hash || makeHash(type))

    return <div>
        <Link to={to}>
            <div
                className={"project-thumbnail"}
                style={{backgroundImage, height}}
            >
                <div className={"project-info"}>
                    <div className={"fs02"}>{name}</div>
                    {about&&<Link to={about}><div className={"fs015"}>About</div></Link>}
                </div>
            </div>

        </Link>
    </div>
}

function makeHash(type){
    if (type === "artblocks")
        return randomAbHash()
    return randomFxHash()
}