import React from "react";
import {Link} from "react-router-dom";

export function Navigation() {
    return <>
        <Link to={"/"}><span>home</span></Link>
        <Link to={"/projects"}><span>projects</span></Link>
    </>;
}