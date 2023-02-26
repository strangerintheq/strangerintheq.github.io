import React, {useEffect, useRef, useState} from "react";
import {GeneratorPage} from "./pages/GeneratorPage";
import {ArtPage} from "./pages/ArtPage";
import {HomePage} from "./pages/HomePage";
import {AboutPage} from "./pages/AboutPage";
import {CodePage} from "./pages/CodePage";

const globalStyle = `<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap');
* {
  
    margin: 0;
    font-weight: unset;
    box-sizing: border-box;
    font-family: "Source Code Pro", monospace;
    --base-size: min(1600px, 100vw);
}
body {
    overflow-x: hidden;
    overscroll-behavior: none;
}
.separator {
    height: 1rem;
}
.codepen {
    height: 100%;
    width: 100%;
}
html {
    pointer-events: none;

}
@media (max-width: 980px) {
    html {
        font-size: 1.5em;
    }
}
a, a:visited, iframe {
    pointer-events: all;
}
a, a:visited {
    color: black;
}
.text-outline {
    text-shadow: 
        -1px -1px 0 #fff, 
        +1px -1px 0 #fff, 
        -1px +1px 0 #fff, 
        +1px +1px 0 #fff
}
.backdrop {
    /*z-index: 1;*/
    pointer-events: none;
    background: black;
    transition: 300ms;
}
.loaded .backdrop {
    background: transparent;
}
</style>`;

export function Site() {
    return <>
        <div dangerouslySetInnerHTML={{__html: globalStyle}}/>
        <Router />
    </>
}

function Router() {
    const [route, setRoute] = useState(document.location.search);
    const stateRef = useRef({
        searchString: document.location.search,
        rafLoop: 0
    });
    useEffect(() => {
        let s = stateRef.current;
        s.rafLoop = requestAnimationFrame(loop);
        function loop() {
            if (s.searchString !== document.location.search) {
                s.searchString = document.location.search;
                // let urlSearchParams = new URLSearchParams(document.location.search);
                setRoute(s.searchString);
            }
            s.rafLoop = requestAnimationFrame(loop)
        }
        return () => {
             cancelAnimationFrame(s.rafLoop);
        }
    }, []);
    if (!route)
        return <HomePage ts={Date.now()}/>
    if (route.startsWith("?about"))
        return <AboutPage />
    if (route.startsWith("?art/"))
        return <GeneratorPage route={route}/>
    if (route.startsWith("?art"))
        return <ArtPage />
    if (route.startsWith("?code"))
        return <CodePage />
    return <HomePage />;
}