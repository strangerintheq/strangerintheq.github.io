import React  from "react";
export function ExternalLinkIcon(){
    return <span dangerouslySetInnerHTML={{__html:`
        <svg style="vertical-align: middle" xmlns="http://www.w3.org/2000/svg"  width="1em" height="1em" 
        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path>
            <path d="M10 14l10 -10"></path>
            <path d="M15 4l5 0l0 5"></path>
        </svg>
    `}}/>
}