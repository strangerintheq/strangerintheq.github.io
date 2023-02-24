import React from "react";
import {PageWrapper} from "../components/PageWrapper";
import {Navigation} from "../components/Navigation";
import {GeneratorAsBackground} from "../components/GeneratorAsBackground";

export function AboutPage() {
    // let generators = [
    //     ["fx-hash", "hidden-square"],
    //     ["fx-hash", "magic-ritual"],
    //     ["teia", "nucle"],
    //     ["teia", "re-tiler"],
    // ];
    // let [type, id] = generators[(Math.random()*generators.length)|0];
    return <>
        {/*<GeneratorAsBackground type={type} id={id} />*/}
        <PageWrapper>
            <Navigation dark={false}/>
            <div style={{fontSize: '1.5rem', marginTop: "2rem"}}>
                Hello there! I'm Stranger in the Q and i'm making art with code.
            </div>
            <div style={{fontSize: '1.2rem', marginTop: "2rem"}}>
                I have been a software developer for about 2 decades now.
                I develop different user interfaces and other things related to computer graphics.
                At some point I started creating images with code to teach myself math and algorithms.
                As time went on I learned more about it and became more interested in it.
                That's how I realized that it's an art, a&nbsp;
                <span style={{fontWeight: "bold"}}>Generative Art</span>.
            </div>
        </PageWrapper>
    </>
}