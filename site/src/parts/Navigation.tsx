import React from "react";
import {NavigationBody} from "./components/NavigationBody";
import {NavLink} from "./components/NavLink";

export function Navigation({dark= false}) {
    return <NavigationBody>
        <div>
            <NavLink to={""}>Q</NavLink>
        </div>
        <div>
            <NavLink to={"page=about"}>about</NavLink>
            &nbsp;
            <NavLink to={"page=code"}>code</NavLink>
            &nbsp;
            <NavLink to={"page=art"}>art</NavLink>
        </div>
    </NavigationBody>
}


