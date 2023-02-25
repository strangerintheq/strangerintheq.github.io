import React from "react";
import {NavigationBody} from "./components/NavigationBody";
import {NavLink} from "./components/NavLink";
import {GenerativeIcon} from "./components/GenerativeIcon";

export function Navigation({dark= false}) {
    return <NavigationBody>
        <div style={{marginLeft:"0rem"}}>
            <NavLink>
                <GenerativeIcon size={"2.5rem"}/>
            </NavLink>
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


