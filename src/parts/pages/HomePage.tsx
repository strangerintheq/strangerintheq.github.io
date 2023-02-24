import React, {useEffect} from "react";
import {PageWrapper} from "../components/PageWrapper";
import {Navigation} from "../components/Navigation";
import {GeneratorAsBackground} from "../components/GeneratorAsBackground";
import {useNavigate} from "react-router";
import {sitePath} from "../vars";

export function HomePage() {

    const navigate = useNavigate()

    useEffect(() => {
        // debugger
        const path = document.location.href;
        if (path.includes("?route=")) {
            navigate(sitePath + "/" + path.split("?route=")[1])
        }
    }, []);

    let generators = [
        ["fx-hash", "mayan-carpet"],
        // ["fx-hash", "generotique"],
        ["fx-hash", "amulet"],
        ["fx-hash", "cellulae"],
        ["fx-hash", "gravitzappa"],
        ["fx-hash", "hidden-square"],
        ["fx-hash", "magic-ritual"],
        ["fx-hash", "mitosis"],
        ["fx-hash", "other-side-of-the-amulet"],
        ["teia", "artificial-eye"],
        ["teia", "dancing-souls"],
        ["teia", "inner-sight"],
        ["teia", "mozaic-perception"],
        ["teia", "neural-interface"],
        ["teia", "nucle"],
        ["teia", "re-tiler"],
        ["teia", "simplicity"],
        ["teia", "steam-cells"],
        ["teia", "the-nest"],
        ["teia", "warp-engine"],
    ];
    let [type, id] = generators[(Math.random()*generators.length)|0];
    return <>
        <GeneratorAsBackground type={type} id={id} />
        <PageWrapper>
            <Navigation dark={true}/>
        </PageWrapper>
    </>
}