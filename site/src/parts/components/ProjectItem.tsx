import React from "react";
import {makeLink, NavLink} from "./NavLink";
import {DivWithBackgroundImage} from "./DivWithBackgroundImage";

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

    return <div style={{gridColumn: c, gridRow: r}}>
        <NavLink to={makeLink({type, id: generator, hash, page: "generator"})}>
            <DivWithBackgroundImage img={img}/>
        </NavLink>
    </div>
}

