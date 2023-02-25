import React from "react";
import {makeLink, NavLink} from "./NavLink";
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

    const generator = name.toLowerCase().replaceAll(" ", "-");

    return <div style={{gridColumn: c, gridRow: r}}>
        <NavLink to={makeLink({type, id: generator, hash, page: "generator"})}>
            <DivWithBackgroundImage img={img}/>
        </NavLink>
    </div>
}

