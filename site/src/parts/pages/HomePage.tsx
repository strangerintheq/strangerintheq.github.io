import React, {useEffect, useState} from "react";
import {PageWrapper} from "../components/PageWrapper";
import {Navigation} from "../Navigation";
import {GeneratorAsBackground} from "../components/GeneratorAsBackground";

const generators = [
    // ["fx-hash", "mayan-carpet"],
    // ["fx-hash", "amulet"],
    // ["fx-hash", "cellulae"],
    // ["fx-hash", "gravitzappa"],
    // ["fx-hash", "hidden-square"],
    // ["fx-hash", "magic-ritual"],
    // ["fx-hash", "mitosis"],
    // ["fx-hash", "other-side-of-the-amulet"],
    // ["teia", "artificial-eye"],
    // ["teia", "dancing-souls"],
    // ["teia", "inner-sight"],
    // ["teia", "mozaic-perception"],
    // ["teia", "neural-interface"],
    // ["teia", "nucle"],
    ["teia", "re-tiler"],
    // ["teia", "simplicity"],
    // ["teia", "steam-cells"],
    // ["teia", "the-nest"],
    // ["teia", "warp-engine"],
];

export function HomePage() {

    const [generator, setGenerator] = useState<{ type; id }>()

    useEffect(() => {
        const [type, id] = generators[(Math.random() * generators.length) | 0];
        setGenerator({type, id});
    }, [])

    return <>
        {generator && <GeneratorAsBackground type={generator.type} id={generator.id}/>}
        <PageWrapper>
            <Navigation dark={true}/>
        </PageWrapper>
    </>
}