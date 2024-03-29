import React, {useEffect, useState} from "react";
import {PageWrapper} from "../components/PageWrapper";
import {Navigation} from "../Navigation";
import {GeneratorFrame} from "../components/GeneratorFrame";
import {Stack} from "../components/Stack";
import {LoaderMask} from "../components/LoaderMask";

const generators = [
    ["alba", "xeno"],
    ["artblocks", "slice"],
    ["artblocks", "tentura"],
    ["fx-hash", "amulet"],
    ["fx-hash", "cellulae"],
    ["fx-hash", "arachna"],
    ["fx-hash", "plexus"],
    ["fx-hash", "squatree"],
    ["fx-hash", "let-it-snow"],
    ["fx-hash", "gravitzappa"],
    ["fx-hash", "hidden-square"],
    // ["fx-hash", "magic-ritual"],
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

export function HomePage({route=null}) {
    // console.log('render home page')
    const [generator, setGenerator] = useState<{ type; id }>()

    useEffect(() => {
        const [type, id] = generators[(Math.random() * generators.length) | 0];
        setGenerator({type, id});
        document.title = "Q - " + id
    }, [route])

    return <>
        {generator && <GeneratorFrame id={generator.id} />}
        <LoaderMask/>
        <PageWrapper>
            <Navigation dark={true}/>
        </PageWrapper>
    </>

}