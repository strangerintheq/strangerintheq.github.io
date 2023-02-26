import React  from "react";
import {ExternalLinkIcon} from "./ExternalLinkIcon";

export function ExternalLink({href, children=null}) {
    return <span>
        <a href={href}>{children}</a>
        <ExternalLinkIcon />
    </span>
}