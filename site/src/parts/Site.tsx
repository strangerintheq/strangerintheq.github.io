import React, {useEffect, useState} from "react";
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
    overflow-x: hidden;
    --base-size: min(1600px, 100vw);
}
a, a:visited {
    color: black
}
.text-shadow {
    text-shadow: 
        -1px -1px 0 #fff, 
        +1px -1px 0 #fff, 
        -1px +1px 0 #fff, 
        +1px +1px 0 #fff
}
</style>`;

export function Site() {
    return <>
        <div dangerouslySetInnerHTML={{__html: globalStyle}}/>
        <Router />
    </>
}

function Router() {

    const [page, setPage] = useState();

    useEffect(() => {
        let urlSearchParams = new URLSearchParams(document.location.search);
        setPage(urlSearchParams.get("page"));
    }, [document.location.search]);

    if (page === "art") return <ArtPage />
    if (page === "about") return <AboutPage />
    if (page === "generator") return <GeneratorPage />
    if (page === "art") return <ArtPage />
    if (page === "code") return <CodePage />

    return <HomePage/>;
}