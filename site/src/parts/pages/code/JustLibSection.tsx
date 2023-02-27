import React from "react";
import {PageSubHeader} from "../../components/PageSubHeader";
import {PageText} from "../../components/PageText";
import {Grid} from "../../components/Grid";
import {ExternalLink} from "../../components/ExternalLink";
import {DivWithBackgroundImage} from "../../components/DivWithBackgroundImage";

const jusLibData = [
    ["jOpyYaR", "justlib-genuary-8.jpg"],
    ["qByrdxY", "justlib-genuary-9.jpg"],
    ["vYaXVwL", "justlib-genuary-4.jpg"],
    ["yLqbjeE", "justlib-genuary-11.jpg"],
    ["NWBaeVj", "justlib-genuary-18.jpg"],
    ["MWBmqRd", "justlib-truchet.jpg"],
];

export function JustLibSection() {
    return <>
        <PageSubHeader>
            <ExternalLink href={"https://github.com/strangerintheq/justlib"}>just-lib</ExternalLink>
        </PageSubHeader>
        <PageText>
            Collection of javascript functions to faster create an generative artworks.
            Created to participate in&nbsp;
            <ExternalLink href={"https://genuary.art/"}>genuary</ExternalLink>
            2023 event.
            Gives ability to use normalized cartesian coordinates both in shaders and 2d canvas.
            Simplifies using of shader uniforms and providing random numbers in compile-time into shaders.
        </PageText>
        <Grid>
            {jusLibData.map(el => <a href={"https://codepen.io/strangerintheq/pen/" + el[0]}>
                <DivWithBackgroundImage img={"site/resources/code/" + el[1]}/>
            </a>)}
        </Grid>
    </>
}