import React from "react";
import {Link} from "react-router-dom";
import {sitePath} from "../Crutch";

export function ProjectThumbnail({name, url, img, id, ratio=1}) {
    const backgroundImage = `url(${img.startsWith("http") ? img: sitePath + img})`
    const height = `calc(var(--base-size) * ${0.25/(ratio||1)})`;
    return <div>
        <Link to={'/generator/' + id}>
            <div
                className={"project-thumbnail"}
                style={{backgroundImage, height}}
            >
                <div className={"project-info"}>
                    <div className={"fs02"}>{name}</div>
                    <Link to={url}><div className={"fs015"}>About</div></Link>
                </div>
            </div>

        </Link>
    </div>
}