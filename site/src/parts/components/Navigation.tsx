import React from "react";
import {Link} from "react-router-dom";
import {sitePath} from "../vars";

export function Navigation({dark = false}) {
    return <div style={{margin: '0 -1rem'}}>

        {dark && <div dangerouslySetInnerHTML={{
            __html: `<style>a, a:visited {color: white}</style>`
        }}/>}

        <div
            style={{
                padding:"0.5rem 1rem",
                backgroundColor: dark ? "#0004" : "unset",
                fontSize: "2rem",
                marginTop: '1rem',
                textAlign: 'right'
            }}
        >


            {/*<Link to={sitePath + "/site/about"}><span>about</span></Link>*/}
            {/*&nbsp;&nbsp;*/}
            {/*<Link to={sitePath + "/site/code"}><span>code</span></Link>*/}
            {/*&nbsp;&nbsp;*/}
            <Link to={sitePath + "/site/art"}><span>art</span></Link>

            <span style={{float: "left", color: dark ? "#fff" : "unset"}}>
                <Link to={sitePath + "/"}><span>Q</span></Link>
            </span>
        </div>
    </div>;
}