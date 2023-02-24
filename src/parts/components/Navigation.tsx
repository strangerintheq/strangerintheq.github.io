import React from "react";
import {Link} from "react-router-dom";
import {sitePath} from "../vars";

export function Navigation({dark = false}) {
    return <>

        {dark && <div dangerouslySetInnerHTML={{
            __html: `<style>a, a:visited {color: white}</style>`
        }}/>}

        <div
            style={{
                backgroundColor: dark ? "#0004" : "unset",
                fontSize: "2rem",
                marginTop: '2rem',
                textAlign: "right"
            }}
        >
            <Link to={sitePath + "/"}><span>Home</span></Link>
            &nbsp;
            <Link to={sitePath + "/about"}><span>About</span></Link>
            &nbsp;
            <Link to={sitePath + "/code"}><span>Code</span></Link>
            &nbsp;
            <Link to={sitePath + "/artworks"}><span>Artworks</span></Link>
        </div>
    </>;
}