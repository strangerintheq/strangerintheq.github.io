import React from "react";
import {NavLink} from "./NavLink";
import {DivWithBackgroundImage} from "./DivWithBackgroundImage";
import {randomHash} from "../tools";

export function ProjectItem(
    {
        name,
        type,
        img,
        hash = randomHash(type),
        c = null,
        r = null,
        link = null
    }
) {

    const projectId = name.toLowerCase().replaceAll(" ", "-");

    return <div style={{gridColumn: c, gridRow: r}}>
        <NavLink to={"art/" + projectId + "/" + hash}>
            <DivWithBackgroundImage img={img}/>
        </NavLink>
    </div>
}

